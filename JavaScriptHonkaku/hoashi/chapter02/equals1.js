const x = 0.2;
const y = 0.6;

console.log(x * 10 * 3 === y * 10);

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

console.log(Number.EPSILON);
