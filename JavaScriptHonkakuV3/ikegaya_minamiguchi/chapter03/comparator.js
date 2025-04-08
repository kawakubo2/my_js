const x = 10;   // number型
const y = '10'; // string型

console.log(x == y);
console.log(x === y);
console.log(x === Number(y));

/*
falsyな値
0, 0.0
''
null, undefined, NaN
*/

console.log(1 == true)
console.log(0 == false); // 0はfalseとみなされる

// console.log('abc' == true);
console.log('' == false); // ''もfalseとみなされる
