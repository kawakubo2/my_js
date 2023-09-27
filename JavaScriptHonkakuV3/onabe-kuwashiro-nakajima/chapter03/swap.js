let x = 8;
let y = 5;
console.log('入替前');
console.log(`x = ${x}, y = ${y}`);
let temp = x;
x = y;
y = temp;
console.log('入替後');
console.log(`x = ${x}, y = ${y}`);

let a = 8;
let b = 5;
console.log('入替前');
console.log(`a = ${a}, b = ${b}`);
[b, a] = [a, b];
console.log('入替後');
console.log(`a = ${a}, b = ${b}`);