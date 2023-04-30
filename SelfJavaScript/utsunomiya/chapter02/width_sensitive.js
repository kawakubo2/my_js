"use strict";

let greeting = "半角英数字でコードは記述しましょう。";
let ｇｒｅｅｔｉｎｇ = "ｌｅｔが全角のためエラー";
console.log(greeting);
console.log(ｇｒｅｅｔｉｎｇ);

/**
 * 第1引数と第2引数の数値の合計を返す関数
 * @param {int} x 
 * @param {int} y 
 * @returns {int}
 */
function add(x, y) {
    return x + y;
}

/**
 * 第1引数から第2引数を減算した結果を返す関数 
 * @param {int} x 
 * @param {int} y 
 * @returns {int} xとyの差
 */
function sub(x, y) {
    return x - y;
}
console.log(add(10, 20));