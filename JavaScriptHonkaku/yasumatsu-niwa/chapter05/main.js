import { Member, Area } from './lib/Util.js';

const mem = new Member('花子', '横山');
console.log(mem.getName());

console.log(`三角形の面積: ${Area.getTriangle(8, 7)}`);
console.log(`菱形の面積: ${Area.getDiamond(10, 9)}`);
