import { Member, Area } from './lib/Util.js';

const mem = new Member('太郎', '山田');
console.log(mem.getName());

const tri = new Area(10, 5);
console.log(tri.getTriangleArea());