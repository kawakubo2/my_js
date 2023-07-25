let x = 0.2;
let y = 0.6;

console.log(x * 3);
console.log(y);
if (x * 10 * 3 === y * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
