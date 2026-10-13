function aggregate_function(numbers) {
  let total = 0;
  let cnt = 0;
  let max = numbers[0];
  let min = numbers[0];
  for (const n of numbers) {
    total += n;
    cnt++;
    if (n > max) max = n;
    if (n < min) min = n;
  }
  return [total, total / cnt, max, min, cnt];
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [sum, avg, max, min, count] = aggregate_function(nums);
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);
console.log(count);
console.log('-------');
const [sum2, avg2] = aggregate_function(nums);
console.log(sum2);
console.log(avg2);
console.log('-------');
const [,, max2, min2] = aggregate_function(nums);
console.log(max2);
console.log(min2);
console.log('-------');
const [sum3, avg3, ...rest] = aggregate_function(nums);
console.log(sum3);
console.log(avg3);
console.log(rest);