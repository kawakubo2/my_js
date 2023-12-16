let name = "山田太郎";
console.log(name);
name = 123;
console.log(name);

function add(x, y) {
    return x + y;
}

name = add;
console.log(name(10, 20));

/*
静的型付け言語・・・C/C++, Java, C#
動的型付け言語・・・JavaScript, Python, Ruby
*/

// 定数定義
const price = 1000;
// price = 2000;

let 価格 = 10000;
let 消費税込み価格 = Math.floor(価格 * 1.08);
console.log(消費税込み価格);