let str1 = ''; // falsyな値
console.log('string型からboolean型への変換');
let b11 = Boolean(str1); // 推奨
console.log(typeof b11);
let b12 = !!str1; // 憶えておいた方が良い
console.log(typeof b12);
console.log(b12);

let str2 = 'ABC';
let b21 = Boolean(str2);
console.log(typeof b21);
let b22 = !!str2;
console.log(typeof b22);
console.log(b22);

console.log('string型からnumber型への変換');

let str3 = '123';
console.log(typeof str3); // string
console.log(str3); // '123'
let n1 = Number(str3);
console.log(typeof n1); // number
console.log(n1); // 123 
