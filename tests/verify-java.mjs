// Compile and execute all teaching examples and task reference solutions (Java 21).
// No arbitrary user code is read; only trusted source files shipped with the app.
import {lessons} from '../data/lessons.js';
import {tasks} from '../data/tasks.js';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {promisify} from 'node:util';
import {execFile} from 'node:child_process';
const exec=promisify(execFile);
const utf8Env={...process.env,LANG:'C.UTF-8',LC_ALL:'C.UTF-8'};
const all=[...lessons.map(x=>({id:x.id,code:x.code,expected:null})),...tasks.map(x=>({id:x.id,code:x.solution,expected:x.expected}))];
const problems=[];
let index=0,passed=0;
async function check({id,code,expected}){
 const path=await mkdtemp(join(tmpdir(),'java-lab-verification-'));
 try{
  await writeFile(join(path,'Main.java'),code);
  await exec('javac',['-encoding','UTF-8','Main.java'],{cwd:path,timeout:10000,maxBuffer:500000,env:utf8Env});
  const {stdout}=await exec('java',['-cp',path,'Main'],{cwd:path,timeout:5000,maxBuffer:500000,env:utf8Env});
  if(expected!==null&&stdout.replace(/\r\n/g,'\n').trimEnd()!==expected.replace(/\r\n/g,'\n').trimEnd())throw new Error(`expected ${JSON.stringify(expected)}, got ${JSON.stringify(stdout)}`);
  passed++;
 }catch(e){problems.push(`${id}: ${e.stderr?.slice(0,250)||e.message}`);}finally{await rm(path,{recursive:true,force:true});}
}
async function worker(){while(index<all.length){const item=all[index++];await check(item);}}
await Promise.all(Array.from({length:4},()=>worker()));
console.log(`Java 21: ${passed}/${all.length} primjera uspješno kompajlirano i izvršeno.`);
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}
