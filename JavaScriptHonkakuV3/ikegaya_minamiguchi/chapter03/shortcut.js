let x = 8;
let y = 5;
let z = 2;

console.log(`x=${x}, y=${y}, z=${z}`);
if (x >= 5 && (y *= 5) > 8) {
  z += 10;
}
console.log(`x=${x}, y=${y}, z=${z}`);

let w = 1;
if (w === 1) {
  console.log('こんにちは！');
}

w === 1 && console.log('こんにちは！');

w === 2 || console.log('こんばんは！');