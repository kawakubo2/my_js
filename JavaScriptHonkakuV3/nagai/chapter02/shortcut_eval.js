'use strict';

let x = 10;
let y = 5;
let z = 8;

if (x >= y * 2 || (z = z * 2)) {
  x *= 3;
}

console.log(`x=${x}, y=${y}, z=${z}`);

if (x = 2) {
  x *= 2;
}

console.log(`x=${x}`);