function aggregate(numbers) {
  let cnt = 0;
  let total = 0;
  let max = numbers[0];
  let min = numbers[0];
  for (const num of numbers) {
    cnt++;
    total += num;
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return [total, total / cnt, max, min, cnt];
}

const nums = [9, 4, 8, 1, 10, 7, 5, 3, 6, 2];

const result = aggregate(nums);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

// 可読性(readability)
const [sum, avg, max, min, count] = aggregate(nums);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);