import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'../dist');
const html=await readFile(resolve(root,'index.html'),'utf8');
assert.match(html,/<html lang="es-AR">/);assert.equal((html.match(/<h1\b/g)||[]).length,1);
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const path=match[1];if(path.startsWith('#'))assert(ids.has(path.slice(1)),`Ancla inválida: ${path}`);else if(!/^[a-z]+:/i.test(path))await access(resolve(root,decodeURIComponent(path)));}
for(const tag of html.matchAll(/<img\b[^>]*>/g)){assert.match(tag[0],/alt="[^"]+"/);assert.match(tag[0],/width="\d+"/);assert.match(tag[0],/height="\d+"/);}
const data=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(data['@type'],'MusicGroup');assert.equal(data.name,'Sound de Barrio');assert.equal(new URL(data.url).protocol,'https:');
assert(html.includes(`content="${data.url}assets/social.jpg"`));assert(html.includes(`rel="canonical" href="${data.url}"`));
assert((await readFile(resolve(root,'sitemap.xml'),'utf8')).includes(`<loc>${data.url}</loc>`));assert((await readFile(resolve(root,'robots.txt'),'utf8')).includes(`Sitemap: ${data.url}sitemap.xml`));
assert(!html.includes('elapacheness.com'));assert(!html.includes('localhost'));assert(!html.includes('TODO'));
console.log('OK: enlaces internos, archivos, imágenes, idioma, encabezado, JSON-LD, canonical, Open Graph, sitemap y robots.');
