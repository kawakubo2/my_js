// function命令による定義
function add1(x, y) {
    return x + y;
}

// Functionコンストラクタによる定義
let param = 'x,y';
let formula = 'return x + y';
const add2 = new Function(param, formula);


// 関数リテラル(匿名関数, 無名関数)
const add3 = function(x, y) {
    return x + y;
}

// アロー関数
const add4 = (x, y) => x + y;

let x = 120;
let y = 90;
console.log(add1(x, y));
console.log(add2(x, y));
console.log(add3(x, y));
console.log(add4(x, y));