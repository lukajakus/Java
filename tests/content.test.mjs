import test from 'node:test';
import assert from 'node:assert/strict';
import {modules} from '../data/modules.js';
import {lessons} from '../data/lessons.js';
import {tasks} from '../data/tasks.js';
import {glossary} from '../data/glossary.js';

test('13 jedinstvenih modula i 32 lekcije',()=>{
 assert.equal(modules.length,13);assert.equal(lessons.length,32);
 assert.equal(new Set(modules.map(x=>x.id)).size,modules.length);
 assert.equal(new Set(lessons.map(x=>x.id)).size,lessons.length);
 for(const m of modules) assert.ok(lessons.some(l=>l.module===m.id),`Nema lekcija: ${m.id}`);
});
test('svaka lekcija ima pedagoški sadržaj, kviz i kod',()=>{
 for(const l of lessons){
  assert.ok(l.concept.length>150,`Kratka teorija: ${l.id}`);
  assert.ok(l.why.length>30,`Nedostaje motivacija: ${l.id}`);
  assert.match(l.code,/class Main/);
  assert.ok(l.walk.length>=3,`Premalo koraka: ${l.id}`);
  assert.ok(l.pitfall.length>25,`Nedostaju pogreške: ${l.id}`);
  assert.ok(l.quiz.options.length>=2,`Kviz nije potpun: ${l.id}`);
  assert.ok(l.quiz.answer>=0&&l.quiz.answer<l.quiz.options.length,`Nevaljan odgovor: ${l.id}`);
  assert.ok(l.quiz.explanation.length>20,`Nedostaje objašnjenje: ${l.id}`);
 }
});
test('39 zadataka imaju starter, testni ispis, tri smjernice i rješenje',()=>{
 assert.equal(tasks.length,39);
 assert.equal(new Set(tasks.map(x=>x.id)).size,tasks.length);
 for(const t of tasks){
  assert.ok(modules.some(m=>m.id===t.module),`Pogrešan modul ${t.id}`);
  assert.ok(t.starter.length>10&&t.solution.length>20,`Nepotpun zadatak ${t.id}`);
  assert.ok(t.hints.length===3,`Tri smjernice ${t.id}`);
  assert.equal(typeof t.expected,'string',`Nedostaje očekivani ispis ${t.id}`);
 }
});
test('pojmovnik ima bar 60 stavaka',()=>assert.ok(glossary.length>=60));
