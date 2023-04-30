/*
 作者: 川久保智晴
 作成日: 2022/6/8
 JavaScriptの基礎を勉強するためのScript
*/

// alertはポップアップを表示するための関数
alert('これは外部ファイル化したJavaScriptです。'); // ここにもコメントが書ける

/**
 * 引数で受け取った二つの数値の和を返す関数
 * @param {number} x 
 * @param {number} y 
 * @returns number
 */
function add(x, y) {
    return x + y;
}
console.log(add(10, 20));
