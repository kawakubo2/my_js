let x = 10;
console.log(`x=${x}`);
x = x + 1;
console.log(`x = x + 1 ---> ${x}`);
x += 1;
console.log(`x += 1 ---> ${x}`);
x++;
console.log(`x++ ---> ${x}`);

console.log('--- 後置インクリメント ---');
let a = 5;
let b = a++;
console.log(`a=${a}`);
console.log(`b=${b}`);

let c = 10;
console.log(c++);
console.log(c);

console.log('--- 前置インクリメント ---');

let d = 5;
let e = ++d;
console.log(`d=${d}`);
console.log(`e=${e}`);

console.log('--- 後置デクリメント ---');
let f = 5;
let g = f--;
console.log(`f=${f}`);
console.log(`g=${g}`);

console.log('--- 前置デクリメント ---');

let h = 5;
let i = --h;
console.log(`h=${h}`);
console.log(`i=${i}`);

let j = 10;
console.log(j++ * j++ - j--);