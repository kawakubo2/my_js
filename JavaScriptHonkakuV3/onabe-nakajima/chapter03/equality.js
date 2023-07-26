let x = '10';
let y = 10;

if (x == y) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
if (x === y) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

console.log(x === y ? '等しい': '等しくない'); // 条件演算子(3項演算子と呼ぶ人もいるが避けた方が無難)