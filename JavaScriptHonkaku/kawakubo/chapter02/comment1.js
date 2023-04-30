/*
 コメントの書き方
 author: Tomoharu Kawakubo
 date: 2022/01/12
 */
let price = 1000;

// 消費税率(8%)
let tax = 0.08;

let subtotal = Math.floor(price * (1 + tax)); // 消費税の計算

/**
 * 2つの数値型の引数の和を返す関数
 * @param {number} x 
 * @param {number} y
 * @returns {number}
 */
function add(x, y) {
    if (typeof x !== 'number') {
        throw new Error('数値型ではない');
    }
    if (typeof y !== 'number') {
        throw new Error('数値型ではない');
    }
    return x + y;
}

try {
    console.log(add(10, 10));
} catch(e) {
    console.log(e);
}