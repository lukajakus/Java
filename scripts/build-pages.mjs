import {rm,mkdir,cp,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const dest=join(root,'.site');
await rm(dest,{recursive:true,force:true});
await mkdir(dest,{recursive:true});
for(const name of ['index.html','app.js','styles.css','service-worker.js','manifest.webmanifest','assets','data']){
 await cp(join(root,name),join(dest,name),{recursive:true});
}
await writeFile(join(dest,'.nojekyll'),'');
console.log('GitHub Pages statički artefakt:',dest);
