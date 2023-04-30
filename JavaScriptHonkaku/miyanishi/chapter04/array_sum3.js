let numbers = [3, 7, -4, 2, 6, 8, -3, 9, 5, 1 ];

function array_sum1(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(array_sum1(numbers));

function array_positive_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}

console.log('合計:' + array_positive_sum(numbers));

function array_positive_even_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            total += n;
        }
    }
    return total;
}

console.log('偶数正数の合計:' + array_positive_even_sum(numbers));

function array_negative_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n < 0) {
            total += n;
        }
    }
    return total;
}

console.log('負数の合計:' + array_negative_sum(numbers));

function higher_order_sum(func, nums) {
    let total = 0;
    for (let n of nums) {
        if (func(n)) {
            total += n;
        }
    }
    return total;
}

function positive(n) {
    return n > 0;
}

console.log(higher_order_sum(positive, numbers));
console.log(higher_order_sum(n => n > 0, numbers));
console.log(higher_order_sum(n => n > 0 && n % 2 == 0, numbers));

let s = '12.5,5.3,6.12,9.42,7.0';

function my_total(str) {
    let total = 0;
    let ary = str.split(',');
    for (let a of ary) {
        total += Number.parseFloat(a);
    }
    return total;
}

console.log(my_total(s));

let a = 12;
let b = 35;
let c = 8;
let d = 20;

function my_max(w, x, y, z) {
    let max = w;
    if (x > max) max = x;
    if (y > max) max = y;
    if (z > max) max = z;
    return max;
}

function my_max2(...nums) {
    let max = nums[0];
    for (let n of nums) {
        if (n > max) max = n;
    }
    return max;
}

console.log(my_max(a, b, c, d));
console.log(my_max2(12, 28, -8, 20, 44, 7, 18, 33));

let str2 = "abcdxyzabc123ac";