import { Member, Triangle } from './lib/Util.js'

const mem = new Member('太郎', '山田', 38);
console.log(mem.toString());

const tri = new Triangle(8, 5);
console.log(`三角形の面積は: ${tri.getArea()}`);