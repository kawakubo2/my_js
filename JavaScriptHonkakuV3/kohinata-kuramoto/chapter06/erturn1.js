const numbers = [4, 9, 1, 8, 7, 10, 6, 5, 3, 2];

function aggregate(nums) {
  let total = 0;
  let cnt = 0;
  let max = nums[0];
  let min = nums[0];
  for (const num of nums) {
    total += num;
    cnt++;
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return {sum: total, avg: total / cnt, max: max, min: min, count: cnt};
}

const result = aggregate(numbers);
console.log(result);