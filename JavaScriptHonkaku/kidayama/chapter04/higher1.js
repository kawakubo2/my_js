const numbers = [-3, 4, 2, -4, 3, 5, 1, 9, 6, 8, 7];

function my_sum(nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum;
}

console.log(my_sum(numbers));

function positive_sum(nums) {
    let sum = 0;
    for (const n of nums) {
        if (n > 0) {
            sum += n;
        }
    }
    return sum;
}

console.log(positive_sum(numbers));

function even_sum(nums) {
    let sum = 0;
    for (const n of nums) {
        if (n % 2 === 0) {
            sum += n;
        }
    }
    return sum;
}

function positive_even_sum(nums) {
    let sum = 0;
    for (const n of nums) {
        if (n > 0 && n % 2 === 0) {
            sum += n;
        }
    }
    return sum;
}

console.log(even_sum(numbers));
console.log(positive_even_sum(numbers));
/**
 * 
 * @param {Function} func 引数が整数値で戻り値がbool型であるような関数(callback関数) 
 * @param {number} nums 整数値の配列
 * @returns {number} funcの条件を満たした数値の合計
 */
function higher_sum(func, nums) {
    let sum = 0;
    for (const n of nums) {
        if (func(n)) {
            sum += n;
        }
    }
    return sum;
}

function even_num(num) {
    return num % 2 === 0;
}

console.log(higher_sum(even_num, numbers));
console.log(higher_sum(n => n > 0 && n % 2 === 0, numbers));