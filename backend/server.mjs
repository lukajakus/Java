/**
 * Java Learning Lab: local-only static server and optional Java runner.
 * Default mode requires Docker and does not execute Java code on the host.
 * --unsafe-local is for trusted source on the developer's own computer ONLY.
 */
import http from 'node:http';
import {spawn, spawnSync} from 'node:child_process';
import {mkdtemp, writeFile, readFile, rm, chmod} from 'node:fs/promises';
import {createReadStream, existsSync, statSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const port=Number(process.env.PORT || 4173);
const unsafe=process.argv.includes('--unsafe-local');
const image=process.env.JAVA_DOCKER_IMAGE || 'eclipse-temurin:21-jdk';
const dockerAvailable=()=>spawnSync('docker',['image','inspect',image],{timeout:3000,stdio:'ignore'}).status===0;
const available=unsafe||dockerAvailable();
const TYPE={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const send=(res,status,body,headers={})=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...headers});res.end(typeof body==='string'?body:JSON.stringify(body));};
const MAX_OUT=60000;
function limitedSpawn(command,args,{cwd,stdin='',timeout=7000}={}){
  return new Promise((resolveResult)=>{
    let stdout='',stderr='',closed=false,timedOut=false,exitCode=null;
    const child=spawn(command,args,{cwd,env:{...process.env},stdio:['pipe','pipe','pipe'],windowsHide:true});
    const finish=()=>{if(closed)return;closed=true;clearTimeout(timer);resolveResult({stdout:stdout.slice(0,MAX_OUT),stderr:stderr.slice(0,MAX_OUT),exitCode,timedOut});};
    const collect=(data,key)=>{const txt=data.toString('utf8');if(key==='out')stdout=(stdout+txt).slice(0,MAX_OUT+1);else stderr=(stderr+txt).slice(0,MAX_OUT+1);if(stdout.length>MAX_OUT||stderr.length>MAX_OUT){timedOut=true;child.kill('SIGKILL');}};
    child.stdout.on('data',x=>collect(x,'out'));child.stderr.on('data',x=>collect(x,'err'));
    child.on('error',e=>{stderr+='\n'+e.message;exitCode=127;finish();});
    child.on('close',code=>{exitCode=typeof code==='number'?code:124;finish();});
    const timer=setTimeout(()=>{timedOut=true;child.kill('SIGKILL');},timeout);
    child.stdin.on('error',()=>{});child.stdin.end(stdin);
  });
}
async function runJava(code,stdin){const dir=await mkdtemp(join(tmpdir(),'java-lab-'));try{
  await chmod(dir,0o777);await writeFile(join(dir,'Main.java'),code,{mode:0o666});await chmod(join(dir,'Main.java'),0o666);
  if(unsafe){
    const c=await limitedSpawn('javac',['-encoding','UTF-8','Main.java'],{cwd:dir,timeout:6000});if(c.exitCode!==0)return c;
    return await limitedSpawn('java',['-Xmx128m','-cp',dir,'Main'],{cwd:dir,stdin,timeout:6000});
  }
  // Untrusted code stays inside a locked-down, ephemeral Docker container; no net.
  // Local temp directory is the ONLY writable mounted directory. Never mount the project.
  const args=['run','--rm','--network','none','--cpus','0.75','--memory','256m','--memory-swap','256m','--pids-limit','48','--cap-drop','ALL','--security-opt','no-new-privileges','--read-only','--user','65534:65534','--tmpfs','/tmp:rw,nosuid,nodev,size=32m','--mount',`type=bind,source=${dir},target=/work`,'--workdir','/work',image,'sh','-c','javac -encoding UTF-8 Main.java && java -Xmx128m -XX:ActiveProcessorCount=1 -cp /work Main'];
  return await limitedSpawn('docker',args,{stdin,timeout:9500});
 }finally{await rm(dir,{recursive:true,force:true,maxRetries:2,retryDelay:100}).catch(()=>{});}}
const server=http.createServer(async(req,res)=>{
  res.setHeader('X-Frame-Options','DENY');res.setHeader('Referrer-Policy','no-referrer');
  const uri=new URL(req.url||'/',`http://${req.headers.host||'localhost'}`);
  if(uri.pathname==='/api/health'){if(req.method!=='GET')return send(res,405,{error:'Method not allowed'});return send(res,200,{available,mode:unsafe?'UNSAFE local execution (trusted code only)':available?'Docker sandbox':'Docker image unavailable',javaVersion:'21'});}
  if(uri.pathname==='/api/run'){
    if(req.method!=='POST')return send(res,405,{error:'Method not allowed'});
    if(!available)return send(res,503,{error:`Docker image ${image} nije dostupna. Pokreni docker pull ${image}.`});
    if(req.headers['content-type']?.split(';')[0]!=='application/json')return send(res,415,{error:'Expected application/json'});
    let body='',tooLarge=false;for await(const buf of req){body+=buf.toString('utf8');if(Buffer.byteLength(body)>100000){tooLarge=true;break;}}
    if(tooLarge)return send(res,413,{error:'Request too large'});
    let data;try{data=JSON.parse(body);}catch{return send(res,400,{error:'Invalid JSON'});}
    if(typeof data.code!=='string'||!data.code.trim()||data.code.length>30000||typeof data.stdin!=='string'&&data.stdin!==undefined||String(data.stdin||'').length>10000)return send(res,400,{error:'Neispravni parametri Java programa.'});
    // Guard against accidental wrong filename rather than attempting arbitrary .java files.
    if(!/\bclass\s+Main\b/.test(data.code)&&!/\brecord\s+Main\b/.test(data.code))return send(res,400,{error:'Kod mora sadržavati klasu Main (Main.java).'});
    try{return send(res,200,await runJava(data.code,data.stdin||''));}catch(e){return send(res,500,{error:'Izvršavanje nije uspjelo: '+e.message});}
  }
  if(req.method!=='GET'&&req.method!=='HEAD')return send(res,405,{error:'Method not allowed'});
  let pathname;try{pathname=decodeURIComponent(uri.pathname);}catch{return send(res,400,{error:'Invalid URL'});}
  if(pathname==='/'||pathname==='')pathname='/index.html';
  if(/(^|\/)\./.test(pathname)||pathname.includes('\0')||pathname.includes('\\'))return send(res,403,{error:'Forbidden'});
  const path=resolve(root,'.'+pathname);if(!path.startsWith(root+sep)||!existsSync(path)||!statSync(path).isFile())return send(res,404,{error:'Not found'});
  if(!TYPE[extname(path)])return send(res,403,{error:'File type blocked'});
  res.writeHead(200,{'Content-Type':TYPE[extname(path)],'X-Content-Type-Options':'nosniff'});
  if(req.method==='HEAD'){res.end();return;}createReadStream(path).pipe(res);
});
server.listen(port,'127.0.0.1',()=>console.log(`Java Learning Lab: http://127.0.0.1:${port} | runner: ${available?(unsafe?'UNSAFE local':'Docker sandbox'):'offline - docker image unavailable'}`));
