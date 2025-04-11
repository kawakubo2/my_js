let result = '';
console.log(typeof(!!result) + ": " + !!result);
result = 'abc';
console.log(typeof(!!result) + ": " + !!result);
result = 0;
console.log(typeof(!!result) + ": " + !!result);
result = 10;
console.log(typeof(!!result) + ": " + !!result);
result = null;
console.log(typeof(!!result) + ": " + !!result);
result = undefined;
console.log(typeof(!!result) + ": " + !!result);

let b = 0;

/*
b = 0
b はfalsyな値であり、厳密にはfalseではない
したがって b == false はfalseとなる
厳密に比較したいはあ falsyな値を!!をつけてboolean型のfalseに
する必要がある
*/
console.log(!!b === false);
console.log(Boolean(b) === false);

let c = '10';
let d = c - 0;
console.log(typeof d);

let e = Number(c);
console.log(typeof e);