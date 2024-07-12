// funcは丸め関数(Math.ceil, Math.floor, Math.roundや自作の関数)
function myround(func, num, prec) {
    return func(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

console.log(myround(Math.ceil, 1.2345, 2));

/*
const n = 1.23456;
let m = n;
m *= 100; // m ---> 123.456
m = Math.floor(m); // Math.floor(123.456) ---> 123
m /= 100; // 123 ---> 1.23
console.log(m);
*/

let n = 1.23456;
let a1 = myround(Math.ceil, n, 3);
let a2 = myround(Math.floor, n, 3);
let a3 = myround(Math.round, n, 3);
console.log(a1, a2, a3);