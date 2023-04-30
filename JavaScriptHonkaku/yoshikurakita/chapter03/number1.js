let x = 0.2;
let y = 0.6;

// const DELTA = 1.0e-16;
console.log(Math.abs(x * 3 - y) < Number.EPSILON);

let n = 255;
console.log(n.toString(2));
console.log(n.toString(16));

let num = 123.456789;
console.log(num.toFixed(2));

let a = 'abc';
console.log(isNaN(a));

let b = '123';
let c = Number.parseInt(b);
console.log(Number.isInteger(c));

let d = '123.45';
let e = Number.parseFloat(d);
console.log(typeof e === 'number');

let bool = new Boolean(0);
if (bool.valueOf()) {
    console.log('これが表示されたらダメ。');
} else {
    console.log('正しくboolean型に変換された。')
}

const X_SMALL = Symbol();
const SMALL = Symbol();
const MEDIUM = Symbol();
const LARGE = Symbol();
const X_LARGE = Symbol();

console.log(X_SMALL === X_SMALL);

function getSamll() {
    let SMALL = Symbol();
    return SMALL;
}

console.log(SMALL === getSamll())