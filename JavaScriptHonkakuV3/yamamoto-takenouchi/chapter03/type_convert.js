let a = 123;
console.log(typeof a === 'number');
console.log(typeof (a + '')); // 数値から文字列

let b = '123';
console.log(typeof (b - 0)); // 文字列から数値

console.log(typeof !!a); // 数値からboolean
a = 0;
console.log(typeof !!a); // 数値からboolean

let c = 'abc';
console.log(typeof !!c); // 文字列からboolean

