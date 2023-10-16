const param = 'width,height'; // 幅,高さ

const expr1 = 'return width * height;';
const expr2 = 'return (width + height) * 2;';
const expr3 = 'return Math.sqrt(width ** 2 + height ** 2);';

let n = 2;

let func = null;
switch(n) {
    case 1:
        console.log('長方形の面積');
        func = new Function(param, expr1);
        break;
    case 2:
        console.log('長方形の外周');
        func = new Function(param, expr2);
        break;
    case 3:
        console.log('長方形の対角線');
        func = new Function(param, expr3);
        break;
    default:
        break;
}
if (func) {
    console.log(func(8, 6));
}