const numbers = [-5, 4, -2, 6, 8, 5, 7, 4, -1, 9];

function positive_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}

console.log(positive_sum(numbers));

function even_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n % 2 === 0) {
            total += n;
        }
    }
    return total;
}

console.log(even_sum(numbers));

// 正の奇数だけの合計を求める関数
function positive_odd_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n % 2 !== 0 && n > 0) {
            total += n;
        }
    }
    return total;
}

console.log(positive_odd_sum(numbers));

function higher_sum(filter, nums) {
    let total = 0;
    for (const n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}

const is_positive_sum= function(num) {
    return num > 0 && num % 2 !== 0;
}

let answer1 = higher_sum(is_positive_sum, numbers);
console.log(answer1);

let answer2 = higher_sum((num) => num > 0 && num % 2 !== 0, numbers);
console.log(answer2);

let answer3 = higher_sum((n) => n % 3 === 0, numbers);
console.log(answer3);

let answer4 = numbers.filter((n) => n % 3 === 0).reduce((total, n) => total + n);
console.log(answer4);