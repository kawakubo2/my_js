/*
let n = 12.34567;
cosole.log(myround(n, 2)); --> 12.35
*/
function myround(n, prec) {
    return Math.round(n * 10 ** prec) / 10 ** prec;
}
function myceil(n, prec) {
    return Math.ceil(n * 10 ** prec) / 10 ** prec;
}
function myfloor(n, prec) {
    return Math.floor(n * 10 ** prec) / 10 ** prec;
}

let num = 12.34567;
console.log(myround(num, 1));
console.log(myceil(num, 1));
console.log(myfloor(num, 1));
console.log(myround(num, 2));
console.log(myceil(num, 2));
console.log(myfloor(num, 2));
console.log(myround(num, 3));
console.log(myceil(num, 3));
console.log(myfloor(num, 3));

num = 1234567;
console.log(myround(num, -1));
console.log(myceil(num, -1));
console.log(myfloor(num, -1));
console.log(myround(num, -2));
console.log(myceil(num, -2));
console.log(myfloor(num, -2));
console.log(myround(num, -3));
console.log(myceil(num, -3));
console.log(myfloor(num, -3));