const x = 8;
const y = 5;
console.log('---< function命令による定義 >---');
// function命令による定義
// 関数定義
// aやbを仮引数(parameter)
function add(a, b) {
    return a + b; // a + bを戻り値(返り値)と呼ぶ
}
const answer1 = add(x, y);
console.log(answer1);

console.log('---< Functionコンストラクタを経由した定義 >---');
const add2 = new Function('a, b', 'return a + b;');
const answer2 = add2(x, y);
console.log(answer2);

console.log('---< 関数リテラル(無名関数, 匿名関数) >---');
const add3 = function(a, b) {
    return a + b;
};
const answer3 = add3(x, y);
console.log(answer3);

console.log('---< アロー関数 >---');
const add4 = (a, b) => a + b;
/*
const add4 = (a, b) => {
    return a + b;
}
*/ 
const answer4 = add4(x, y);
console.log(answer4);