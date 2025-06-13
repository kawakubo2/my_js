const a = 1.99999;
const b = 1.00001;
const c = 1.234567;

console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(c));

function round_prec(num, prec) {
    return Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

console.log(round_prec(c, 3));

const d = 12345678;
console.log(round_prec(d, -3));
