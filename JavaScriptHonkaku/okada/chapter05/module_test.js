import { my_array_sum, Circle} from './lib/Util.js';
import Rec from './lib/Rectangle.js';

let numbers = [1, [2, 3, [4, 5], [6, 7]], [8, [9, 10]]]
console.log(numbers.toString());
console.log(`合計:${my_array_sum(numbers)}`);

let c1 = new Circle(10);
console.log(`半径10の円の面積: ${c1.getArea()} 外周: ${c1.getCircumference()}`);

let rec = new Rec(8, 5);
console.log(`幅8, 高さ5の長方形の面積は${rec.getArea()}`);