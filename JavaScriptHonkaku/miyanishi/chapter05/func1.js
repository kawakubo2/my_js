console.log(add1(10, 20));
// console.log(add2(10, 20));
// console.log(add3(10, 20));
// console.log(add4(10, 20));


// function命令による定義
function add1(x, y) {
    return x + y;
}

// Functionコンストラクタを経由した定義
let add2 = new Function('x,y', 'return x + y');

// 関数リテラルによる定義
let add3 = function(x, y) {
    return x + y;
}

// アロー関数
let add4 = (x, y) => x + y;

console.log(add1(10, 20));
console.log(add2(10, 20));
console.log(add3(10, 20));
console.log(add4(10, 20));