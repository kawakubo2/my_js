const numbers = [
  1, 2, [3, 4, [5, 6], 7], 'a', [8, 9, 'b', 10]
];
// 再帰関数
function sum(nums) {
  let total = 0;
  for (const n of nums) {
    if (typeof n !== 'number' && !Array.isArray(n)) continue;
    if (Array.isArray(n)) {
      total += sum(n);
    } else {
      total += n;
    }
  }
  return total;
}

console.log(sum(numbers));

const total2 = numbers
  .flat(Infinity)
  .filter(n => typeof n === 'number')
  .reduce((total, n) => total + n);

console.log(total2);

let total3 = 0;
let numbers2 = numbers.flat(Infinity);
for (const n of numbers2) {
  if (typeof n !== 'number') continue;
  total3 += n;
}
console.log(total3);