let x = 0.2;
let y = 0.6;

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
console.log(x * 3 - y);
console.log(Number.EPSILON);