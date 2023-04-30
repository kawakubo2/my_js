const numbers = [2, -8, 7, 9, -3, 6, 10, 5, 3, 4];

function sum(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}

console.log(sum(numbers));

function positive_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正数の合計: ${positive_sum(numbers)}`);

function positive_odd_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0 && n % 2 !== 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正の奇数の合計: ${positive_odd_sum(numbers)}`);

function higher_sum(func, nums) {
    let total = 0;
    for (const n of nums) {
        if (func(n)) {
            total += n;
        }
    }
    return total;
}

const positive_even_filter = n => n > 0 && n % 2 === 0;

const answer = higher_sum(positive_even_filter, numbers);
console.log(answer);

const answer2 = higher_sum(n => n > 0 && n % 2 === 0, numbers);
console.log(answer2);