let x = 10;
let y = '10';

console.log(typeof x);
console.log(typeof y);

if (x == y) {
    console.log('○');
} else {
    console.log('×');
}

if (x === Number.parseInt(y)) { // 文字列型から整数型への変換
    console.log('○');
} else {
    console.log('×');
}