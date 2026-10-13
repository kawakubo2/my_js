let x = 8;
let y = 5;
console.log(`x=${x}, y=${y}`);
let z = x;
x = y;
y = z;
console.log(`x=${x}, y=${y}`);

let a = 10;
let b = 7;
console.log(`a=${a}, b=${b}`);
[b, a] = [a, b];
console.log(`a=${a}, b=${b}`);