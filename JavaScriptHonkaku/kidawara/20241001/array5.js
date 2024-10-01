const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24];
/*
配列の要素のうち偶数をevenNumbersに格納。奇数とoddNumbersに格納する
*/
const evenNumbers = [];
const oddNumbers  = [];

numbers.reverse();
for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}
console.log(evenNumbers);
console.log(oddNumbers);
