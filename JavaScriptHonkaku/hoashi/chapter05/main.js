import Animal, { Member, Area } from './lib/Util.js'

const animal = new Animal();
animal.walk();
const mem1 = new Member('太郎', '山田');
console.log(`${mem1.getName()}さん、こんにちは！`);
console.log(Area.getTriangleArea(10, 8));
console.log(Area.getDiamondArea(12, 8));