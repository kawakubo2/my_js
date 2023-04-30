// 問題1
// 関数宣言より前に関数呼び出しができる
console.log(add(10, 20));

function add(a, b) {
    return a + b;
}

// 問題2
// 関数式よりも前に関数呼び出しはできない
sub(10, 20);

const sub = function(a, b) {
    return a - b;
}