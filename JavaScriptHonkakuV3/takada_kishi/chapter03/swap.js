let x = 2;
let y = 1;
console.log(`x = ${x}, y = ${y}`);

const z = x;
x = y;
y = z;
console.log(`x = ${x}, y = ${y}`);

let a = 2;
let b = 1;
console.log(`a = ${a}, b = ${b}`);

[b, a] = [a, b];
console.log(`a = ${a}, b = ${b}`);

