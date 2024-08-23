let price = 1000;

/*
関数定義
function 関数名(仮引数1, 仮引数2, ...)
function calc_tax(price, TAX_RATE)
*/

function calc_tax(price, TAX_RATE = 0.08) {
    if (typeof price !== 'number' || price < 0) {
        throw new Error('priceの数値型ではないか、0より小さい値です: ' + price);
    }
    return Math.floor(price * TAX_RATE);
}

/*
関数呼び出し
関数名(実引数1, 実引数2, ...)
calx_tax(900)
*/
price = 900;
let tax = calc_tax(price);
console.log(price + '円の消費税額(8%)は' + tax +'円')
tax = calc_tax(price, 0.1);
console.log(price + '円の消費税額(10%)は' + tax +'円')

try {
    console.log(price + '円の消費税額は' + calc_tax(price) +'円')
} catch (e) {
    console.log(e.message);
}

price = 'abc';
try {
    console.log(price + '円の消費税額は' + calc_tax(price) +'円')
} catch (e) {
    console.log(e.message);
}

price = -2000;
try {
    console.log(price + '円の消費税額は' + calc_tax(price) +'円')
} catch (e) {
    console.log(e.message);
}