import { Rectangle, Circle} from './mylib/util.js';

let r1 = new Rectangle(8, 6);
console.log(`面積:${r1.getArea()} 対角線:${r1.getDiagonal()}`);

let c1 = new Circle(10);
console.log(`面積:${c1.getArea()} 外周:${c1.getCircumference()}`);