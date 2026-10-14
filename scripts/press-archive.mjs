import {readFile,readdir,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
// A standard UTF-8 ZIP with stored entries; preserves each source file byte for byte.
const table=Array.from({length:256},(_,n)=>{for(let i=0;i<8;i++)n=(n&1)?0xedb88320^(n>>>1):n>>>1;return n>>>0;});
function crc32(data){let crc=0xffffffff;for(const byte of data)crc=table[(crc^byte)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;}
export async function createPressArchive(directory){
 const locals=[],centrals=[];let offset=0;
 const files=(await readdir(directory)).filter(name=>name.endsWith('.png')||name==='biografia.txt').sort();
 for(const filename of files){
  const name=Buffer.from(filename),data=await readFile(join(directory,filename)),crc=crc32(data);
  const header=Buffer.alloc(30);header.writeUInt32LE(0x04034b50,0);header.writeUInt16LE(20,4);header.writeUInt16LE(0x800,6);header.writeUInt16LE(33,12);header.writeUInt32LE(crc,14);header.writeUInt32LE(data.length,18);header.writeUInt32LE(data.length,22);header.writeUInt16LE(name.length,26);
  const central=Buffer.alloc(46);central.writeUInt32LE(0x02014b50,0);central.writeUInt16LE(20,4);central.writeUInt16LE(20,6);central.writeUInt16LE(0x800,8);central.writeUInt16LE(33,14);central.writeUInt32LE(crc,16);central.writeUInt32LE(data.length,20);central.writeUInt32LE(data.length,24);central.writeUInt16LE(name.length,28);central.writeUInt32LE(offset,42);
  locals.push(header,name,data);centrals.push(central,name);offset+=header.length+name.length+data.length;
 }
 const directorySize=centrals.reduce((sum,b)=>sum+b.length,0),end=Buffer.alloc(22);
 end.writeUInt32LE(0x06054b50,0);end.writeUInt16LE(files.length,8);end.writeUInt16LE(files.length,10);end.writeUInt32LE(directorySize,12);end.writeUInt32LE(offset,16);
 await writeFile(join(directory,'sound-de-barrio-fotos.zip'),Buffer.concat([...locals,...centrals,end]));
}
