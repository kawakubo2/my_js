console.log(add1(10, 20));
// console.log(add2(20, 30));
// console.log(add3(30, 40));
// console.log(add4(40, 50));

// function命令による定義
function add1(x, y) {
    return x + y;
}

// Functionコンストラクタ経由での定義
let add2 = new Function('x, y', 'return x + y;');

// 関数リテラル(匿名関数, 無名関数)
let add3 = function(x, y) {
    return x + y;
};

// アロー関数
let add4 = (x, y) => x + y;

console.log(add1(10, 20));
console.log(add2(20, 30));
console.log(add3(30, 40));
console.log(add4(40, 50));