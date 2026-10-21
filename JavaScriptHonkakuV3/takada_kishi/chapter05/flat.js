const numbers = [1, [2, 3, [4, 5], [6, 7], 8], 9, [10]];

// 再帰関数(recursive function)
function sum(numbers) {
  let total = 0;
  for (const num of numbers) {
    if (Array.isArray(num)) {
      total += sum(num);
    } else {
      total += num;
    }
  }
  return total;
}

console.log(sum(numbers));

function sum2(numbers) {
  console.log(numbers);
  const nums = numbers.flat(Infinity);
  console.log(nums);
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum2(numbers));