const x = 0.2;
const y = 0.6;

console.log(`x * 3 = ${x * 3}`);
console.log(`y = ${y}`);
console.log(x * 3 === y);
console.log(x * 10 * 3 === y * 10);

// const EPSION = 1.0e-15;
console.log(Math.abs(x * 3 - y) < Number.EPSILON);