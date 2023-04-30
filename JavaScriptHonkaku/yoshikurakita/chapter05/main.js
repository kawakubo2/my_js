import { Member, Area, Sun } from './lib/Util.js';

const Sunday = Symbol()
console.log(Sunday === Sun)

let m = new Member('太郎', '山田');
console.log(m.getName());

console.log(Area.getTriangle(20, 10));