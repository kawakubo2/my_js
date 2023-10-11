function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

const n1 = 5;
const n2 = 3;
const n3 = -2;
const n4 = 2;

/*
 answer = (n1 + n2) * (n1 - n2)
*/
let answer = mul(add(n1, n2), sub(n1, n2));
/*
let answer = mul(8, sub(n1, n2));
let answer = mul(8, 2);
let answer = 16;
*/
console.log(`mul(add(${n1}, ${n2}), sub(${n1}, ${n2})) ---> ${answer}`);

let a1 = add(n1, n2);
let a2 = sub(n1, n2);
let a3 = mul(a1, a2);
console.log(a3);