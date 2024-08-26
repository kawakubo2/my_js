console.log('---< (1) function命令による関数定義 >---');
function add(x, y) {
    return x + y;
}
console.log(add(10, 20));
console.log('---< Functionコンストラクタ経由の関数定義 >---');
const sub = new Function('x, y', 'return x - y');
console.log(sub(100, 60));

console.log('---< 関数リテラル(無名関数・匿名関数) >---');
const mul = function(x, y) { return x * y;}
console.log(mul(7, 8));

console.log('---< アロー関数 >---');
const div = (x, y) => { return x / y; }
console.log(div(40, 5));