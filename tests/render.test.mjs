import test from 'node:test';
import assert from 'node:assert/strict';

test('sve glavne stranice i sve lekcije renderiraju se bez JavaScript pogreške',async()=>{
 const elements=new Map();const get=key=>{if(!elements.has(key))elements.set(key,{innerHTML:'',textContent:'',style:{},classList:{toggle(){},remove(){},add(){}},addEventListener(){},focus(){}});return elements.get(key);};
 const listeners={};
 Object.defineProperty(globalThis,'document',{value:{querySelector:get,querySelectorAll:()=>[],addEventListener(){},body:{classList:{toggle(){}}}},configurable:true});
 Object.defineProperty(globalThis,'window',{value:{addEventListener:(name,fn)=>listeners[name]=fn,scrollTo(){}},configurable:true});
 Object.defineProperty(globalThis,'location',{value:{hash:'#dashboard',protocol:'file:',hostname:'localhost'},configurable:true});
 Object.defineProperty(globalThis,'navigator',{value:{},configurable:true});
 const store=new Map();Object.defineProperty(globalThis,'localStorage',{value:{getItem:key=>store.get(key)||null,setItem:(key,v)=>store.set(key,v)},configurable:true});
 const {lessons}=await import('../data/lessons.js');const {tasks}=await import('../data/tasks.js');
 await import('../app.js');
 assert.match(get('#app').innerHTML,/Od prvog/);
 const views=['lesson','playground','tasks','quiz','simulator','glossary','final'];
 for(const view of views){location.hash='#'+view;listeners.hashchange();assert.ok(get('#app').innerHTML.length>300,`Prazan prikaz ${view}`);}
 for(const l of lessons){location.hash='#lesson/'+l.id;listeners.hashchange();assert.ok(get('#app').innerHTML.includes(l.title),`Lekcija ${l.id} se ne prikazuje`);}
 for(const t of tasks){location.hash='#tasks/'+t.id;listeners.hashchange();assert.ok(get('#app').innerHTML.includes(t.title),`Zadatak ${t.id} se ne prikazuje`);}
});
