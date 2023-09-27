let x = 1;
let y = x;
x = 2;
console.log(`x = ${x}, y = ${y}`);

let data1 = [0, 1, 2];
let data2 = data1;
data1[0] = 5;
console.log(`data1 = ${data1.toString()}`);
console.log(`data2 = ${data2.toString()}`);