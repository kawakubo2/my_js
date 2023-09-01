let x = 10;
++x; // x = x + 1; 前置インクリメント
console.log(`x = ${x}`);

x = 10;
let y = ++x;
console.log(`x = ${x}, y = ${y}`);

x = 10;
y = x++; // 後置インクリメント
console.log(`x = ${x}, y = ${y}`);

x = 10;
y = (x++) * (x++);
console.log(`x = ${x}, y = ${y}`);

let w = 10;
let z = --w;
console.log(`w = ${w}, z = ${z}`);

w = 10;
z = w--;
console.log(`w = ${w}, z = ${z}`);


