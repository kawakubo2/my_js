function add(x, y) {
  return x + y;
}

console.log(typeof add);

const pattern = /^(\+|-)?\d+(\.\d+)?$/;

const ok = ['+1', '-2', '5', '+12', '57', '78', '+1353', '-813', '81881', '+1.3', '-2.3', '3.3', '+13.345', '-0.123', '12315.4244'];

console.log('--- OKパターン ----');
for (const num of ok) {
  console.log(pattern.test(num) ? '〇': '×');
  console.log(Number(num));
}

console.log('--- NGパターン ---');
const ng = ['abc', '123a', 'a123', '123.45.68', '++12', '--3', '2-', '3+'];
for (const num of ng) {
  console.log(pattern.test(num) ? '〇': '×');
  console.log(Number(num));
}
