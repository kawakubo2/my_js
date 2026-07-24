function sum(...nums) { // この...は可変長引数(variable arguments)
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

console.log(sum());
console.log(sum(1, 2, 3, 4, 5));

const numbers = [10, 20, 30];

console.log(sum(...numbers)); // この...は展開演算子(Spread Operator)