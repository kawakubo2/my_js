const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum1(nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

console.log(sum1(numbers)); // 49

/*
正の整数の合計
*/

function sum2(nums) {
  let total = 0;
  for (const n of nums) {
    if (n > 0) {
      total += n;
    }
  }
  return total;
}

console.log(sum2(numbers)); // 55

/*
正の奇数の合計
*/

function sum3(nums) {
  let total = 0;
  for (const n of nums) {
    if (n > 0 && n % 2 === 1) {
      total += n;
    }
  }
  return total;
}

console.log(sum3(numbers));

/*
filter関数は整数値を受け取りbool型を返す関数
*/
function higher_sum(filter, nums) {
  let total = 0;
  for (const n of nums) {
    if (filter(n)) {
      total += n;
    }
  }
  return total;
}

console.log('--- 高階関数 ---');

console.log(higher_sum((n) => true, numbers));
console.log(higher_sum((n) => n > 0, numbers));
console.log(higher_sum((n) => n > 0 && n % 2 === 1, numbers));

console.log('--- アロー関数ではなく、別途定義した関数も渡せる ---');
function positive_number(n) {
  return n > 0;
}

// 高階関数に渡す関数をコールバック関数と呼ぶ
console.log(higher_sum(positive_number, numbers));