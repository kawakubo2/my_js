const x = 12.34567;

console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));

/*
精度指定ができる切上関数
my_ceil(12.34567, 2) ---> 12.35
*/
function my_ceil(num, prec) {
    return (Math.ceil(num * Math.pow(10, prec))) / Math.pow(10, prec);
}

console.log(my_ceil(x, 2));

function my_floor(num, prec) {
    return (Math.floor(num * Math.pow(10, prec))) / Math.pow(10, prec);
}
console.log(my_floor(x, 2));

function my_round(num, prec) {
    return (Math.round(num * Math.pow(10, prec))) / Math.pow(10, prec);
}
console.log(my_round(x, 2));

// 関数の引数として渡す関数をコールバック関数と呼ぶ。下の例ではfuncがコールバック関数
function higher_round(num, prec, func) {
    return (func(num * Math.pow(10, prec))) / Math.pow(10, prec);
}
console.log(higher_round(x, 2, Math.ceil));
console.log(higher_round(x, 2, Math.floor));
console.log(higher_round(x, 2, Math.round));