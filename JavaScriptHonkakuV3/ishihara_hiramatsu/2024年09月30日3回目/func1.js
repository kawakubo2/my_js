const a = 12;
const b = 3;

console.log('関数定義(1)');
console.log('function命令による定義');
/*
関数定義
function 関数名(仮引数1, 仮引数2, ...) 
    return 戻り値(返り値);
}
*/
function add(x, y) {
    return x + y;
}
/*
関数呼び出し
関数名(実引数1, 実引数2, ...);
*/
console.log(`加算: add(${a}, ${b}) ---> ${add(a, b)}`);

console.log('\n関数定義(2)');
const sub = new Function('x, y', 'return x - y;');
console.log('Functionコンストラクタ経由による定義');
console.log(`減算: sub(${a}, ${b}) ---> ${sub(a, b)}`);

console.log('\n関数定義(3)');
console.log('関数リテラル(無名関数, 匿名関数)');
const mul = function(x, y) {
    return x * y;
};
console.log(`乗算: mul(${a}, ${b}) ---> ${mul(a, b)}`);

console.log('\n関数定義(4)');
console.log('アロー関数');
const div = (x, y) => x / y;
console.log(`除算: div(${a}, ${b}) ---> ${div(a, b)}`);

