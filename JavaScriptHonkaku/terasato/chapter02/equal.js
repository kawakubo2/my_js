// 基本型
let x = 1;
let y = x;
x = 2;
console.log(y);

// 参照型
let numbers1 = [1, 2, 3]
let numbers2 = numbers1;
numbers1[0] = 100;
console.log(numbers2);

const CONSUMPTION_TAX = 1.08;
let price = 1000;
console.log(price * CONSUMPTION_TAX);

const numbers3 = [1, 2, 3];
numbers3[0] = 100;
console.log(numbers3);