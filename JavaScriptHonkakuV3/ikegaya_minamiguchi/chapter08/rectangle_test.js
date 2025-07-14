import { Rectangle, add } from "./sub/rectangle.js";

const rec1 = new Rectangle(15, 20);
console.log(`面積: ${rec1.getArea()}`);

const a = 100;
const b = 200;
console.log(`${a} + ${b} = ${add(a, b)}`);