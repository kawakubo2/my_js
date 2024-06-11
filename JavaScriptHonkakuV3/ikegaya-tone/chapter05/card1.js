const n = 12345678;
console.log(n.toString(2));
console.log(n.toString(8));
console.log(n.toString(16));
console.log(n.toString(31));

console.log(n.toExponential());
const m = 0.0000000000123456;
console.log(m.toExponential());

const x = 0.2;
console.log((x * 3).toFixed(1));