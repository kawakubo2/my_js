// higher_order_function.js
let numbers = [-4, -3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

function func1(nums) {
    let total = 0;
    for (let n of nums) {
        total += n
    }
    return total;
}
console.log(func1(numbers));

function func2(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}
console.log(func2(numbers));

function func3(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 === 0) {
            total += n;
        }
    }
    return total;
}
console.log(func3(numbers));

function higher_func(nums, func) {
    let total = 0;
    for (let n of nums) {
        if (func(n)) {
            total += n;
        }
    }
    return total;
}
console.log(`正数の合計: ${higher_func(numbers, (n) => n > 0)}`)
console.log(`正の偶数の合計: ${higher_func(numbers, (n) => n > 0 && n % 2 === 0)}`)