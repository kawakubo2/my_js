let n1 = 1.234567;

let n2 = Math.round(n1);
console.log(n2);

/*
1.234567 * 1000 -> 1234.567 -> Math.round(1234.567) -> 1235 -> 1235 / 1000 -> 1.235
*/
let n3 = Math.round(n1 * Math.pow(10, 3)) / Math.pow(10, 3);
console.log(n3);

function myround(num, prec) {
    return Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

console.log(`myround(n1, 3): ${myround(n1, 3)}`);

console.log(Math.floor(n1));

function myfloor(num, prec) {
    return Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

console.log(myfloor(n1, 3));

let n5 = 123456789;
console.log(myfloor(n5, -3));