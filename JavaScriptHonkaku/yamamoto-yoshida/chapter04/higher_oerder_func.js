const numbers = [5, -4, 8, 2, 7, -3, 9, 1, 4, 3];

function even_filter(nums) {
    const result = [];
    for (const n of nums) {
        if (n % 2 === 0) {
            result.push(n);
        }
    }
    return result;
}

const result1 = even_filter(numbers);
console.log(result1);

function positive_filter(nums) {
    const result = [];
    for (const n of nums) {
        if (n > 0) {
            result.push(n);
        }
    }
    return result;
}

const result2 = positive_filter(numbers);
console.log(result2);

function positive_odd_filter(nums) {
    const result = [];
    for (const n of nums) {
        if (n > 0 && n % 2 !== 0) {
            result.push(n);
        }
    }
    return result;
}

const result3 = positive_odd_filter(numbers);
console.log(result3);
/**
 * 
 * @param func 整数を引数とし、boolean型を戻り値とする関数(コールバック関数) 
 */
function higher_sum(func, nums) {
    const result = [];
    for (const n of nums) {
        if (func(n)) {
            result.push(n);
        }
    }
    return result;
}

function is_even(n) {
    return n % 2 === 0;
}
const result4 = higher_sum(is_even, numbers);
console.log(result4);

const result5 = higher_sum(n => n > 0, numbers);
console.log(result5);

const result6 = higher_sum(n => n > 0 && n % 2 !== 0, numbers);
console.log(result6);