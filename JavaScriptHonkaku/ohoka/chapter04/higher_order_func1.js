function my_sum(filter, nums) {
    let total = 0;
    for (let n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}

let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(`偶数の合計: ${my_sum(num => num % 2 === 0, numbers)}`);
console.log(`正の奇数の合計: ${my_sum(num => num > 0 && num % 2 !== 0, numbers)}`);
console.log(`5以上10以下の合計: ${my_sum(num => num >= 5 && num <= 10, numbers)}`);