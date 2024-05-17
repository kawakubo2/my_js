const x = 0.2;
const y = 0.6;

console.log(x * 10 * 3 === y * 10);

console.log(Number.EPSILON);
if (Math.abs(x * 3 - y) < 1.0E-8) {
    console.log('等しい');
} else {
    console.log('等しくない');
}