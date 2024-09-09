const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = numbers1.filter(n => n % 2 === 0);
console.log(numbers1 === numbers2);
console.log(numbers1);