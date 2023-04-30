let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

function my_sum1(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

function my_sum2(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}
function my_sum3(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            total += n;
        }
    }
    return total;
}

function positive_even(n) {
    return n > 0 && n % 2 == 0;
}


function heigher_sum(nums, func) {
    let total = 0;
    for (let n of nums) {
        if (func(n)) {
            total += n;
        }
    }
    return total;
}

console.log('合計:' + my_sum1(numbers));
console.log('正数の合計:' + my_sum2(numbers));
console.log('正数の偶数の合計:' + my_sum3(numbers));
console.log('正数の偶数の合計:' + heigher_sum(numbers, positive_even));
console.log('正数の合計:' + heigher_sum(numbers, n => n > 0));