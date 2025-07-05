let x = 0.2;
let y = 0.6;

// 加減乗除は優先順位が等しい場合、左から実行する ---> 左結合
if (x * 10 * 3 === y * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

let a;
let b;
let c;

a = b = c = 10; // 右結合
console.log(a, b, c);