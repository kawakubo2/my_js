let x = 0.2;
let y = 0.6;

console.log(x * 10 * 3 == y * 10);

console.log(Math.abs(x * 3 - y) < Number.EPSILON);

let n = 255;

console.log(n.toString(16));
console.log(n.toString(8));
console.log(n.toString(2));

let m = 0;
console.log(typeof (!!m) == 'boolean');