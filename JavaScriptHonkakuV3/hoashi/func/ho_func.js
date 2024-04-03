const n = 123.45678;

console.log(Math.ceil(n));
console.log(Math.floor(n));

function myround(func, num, prec) {
    return func(num * 10 ** prec) / 10 ** prec
}

console.log(myround(Math.ceil, n, 2)); // ---> 123.46
console.log(myround(Math.floor, n, 2)); // ---> 123.45
console.log(myround(Math.round, n, 2)); // ---> 123.46

const n2 = 123456789;
console.log(myround(Math.floor, n2, -3));

function capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

console.log(capitalize('hELLo')); // ---> Hello