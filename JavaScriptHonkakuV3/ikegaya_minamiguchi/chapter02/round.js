const x = 0.2;
const y = 0.6;

console.log(x * 10 * 3 == y * 10); // 左結合
console.log(x * 3 * 10 == y * 10);

let a, b, c;
a = b = c = 10; // 右結合
console.log(a, b, c);

const epsilon = 1.0e-9;

if (Math.abs(x * 3 - y) < epsilon) {
  console.log('等しい');
} else {
  console.log('等しくない');
}