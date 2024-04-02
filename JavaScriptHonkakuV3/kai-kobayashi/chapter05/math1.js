console.log(Math.ceil(1.0000000001));
console.log(Math.floor(1.9999999999));

function myround(func, num, prec) {
    return func(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

const num = 1234.567;
console.log(myround(Math.ceil, num, 2));
console.log(myround(Math.floor, num, 2));
