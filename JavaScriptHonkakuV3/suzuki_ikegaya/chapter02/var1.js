let a; // メモリ領域を確保
a = 234; // 代入
console.log("a=" + a);

let x = 123; // 初期化 --- 変数宣言 + 代入
console.log("x=" + x);

x = x + 100;
console.log("x=" + x);

const z = 1000; // 定数定義

let y = 100;
console.log(typeof y);
y = "abc";
console.log(typeof y);
y = true;
console.log(typeof y);
// 関数定義
function add(x, y) {
    return x + y;
}
y = add;
console.log(y(100, 200));
console.log(typeof y);
