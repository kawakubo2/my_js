let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function even_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n % 2 === 0) {
            total += n;
        }
    }
    return total;
}

console.log(`偶数の合計: ${even_sum(numbers)}`);

function positive_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正数の合計: ${positive_sum(numbers)}`);

function positive_odd_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 !== 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正の奇数の合計: ${positive_odd_sum(numbers)}`);

function higher_sum(filter, nums) {
    let total = 0;
    for (let n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}

console.log(higher_sum(n => n % 2 === 0, numbers));
console.log(higher_sum(n => n > 0, numbers));
console.log(higher_sum(n => n > 0 && n % 2 !== 0, numbers));