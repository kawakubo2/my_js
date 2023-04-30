const n1 = 1.000000001;
const n2 = 1.999999999;

console.log(Math.ceil(n1));
console.log(Math.floor(n2));
console.log(Math.round(n2));

function my_ceil(val, prec) {
    return Math.ceil(val * Math.pow(10, prec)) / Math.pow(10, prec);
}

function my_floor(val, prec) {
    return Math.floor(val * Math.pow(10, prec)) / Math.pow(10, prec);
}

function my_round(val, prec) {
    return Math.round(val * Math.pow(10, prec)) / Math.pow(10, prec);
}

function higher_round(func, val, prec) {
    return func(val * Math.pow(10, prec)) / Math.pow(10, prec);
}

const val3 = 1.2345678;
console.log(my_ceil(val3, 2));
console.log(my_floor(val3, 2));
console.log(my_round(val3, 2));

console.log(higher_round(Math.ceil, val3, 2));
console.log(higher_round(Math.floor, val3, 2));
console.log(higher_round(Math.round, val3, 2));