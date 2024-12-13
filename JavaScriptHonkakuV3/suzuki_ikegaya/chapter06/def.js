// 関数定義は4通りの方法がある
// (1) function命令を使った関数定義
function add1(x, y) { // x, yを仮引数(parameter)
    return x + y;
}
// (2) Functionコンストラクタ経由での関数定義
const add2 = new Function('x,y', 'return x + y;');
// (3) 関数リテラル(無名関数、匿名関数)を使った関数定義
// JavaScriptは関数もただのデータで変数・定数に代入できる
const add3 = function(x, y) {
    return x + y;
}
// (4) アロー関数
/*
const add4 = (x, y) => {
    return x + y;    
}
アローの右側に文がひとつの場合、{}は省略可能かつ
returnは不要
*/
const add4 = (x, y) => x + y;

let a = 8;
let b = 5;
// 関数呼び出し
console.log(`${a} + ${b} = ${add1(a, b)}`);
console.log(`${a} + ${b} = ${add2(a, b)}`);
console.log(`${a} + ${b} = ${add3(a, b)}`);
console.log(`${a} + ${b} = ${add4(a, b)}`);