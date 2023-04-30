let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
function add(x, y) {
    return x + y;
}
let xyz = add;
console.log(xyz(1000, 3000));
*/

function my_array_sum(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(`合計:${my_array_sum(numbers)}`);

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

function positive_even_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            total += n;
        }
    }
    return total;
}

function heigher_order_sum(nums, func) {
    let total = 0;
    for (let n of nums) {
        if (func(n)) {
            total += n;
        }
    }
    return total;
}

function positive_even(n) {
    return n > 0 && n % 2 == 0;
}

console.log(heigher_order_sum(numbers, positive_even));

console.log(`正の偶数の合計: ${heigher_order_sum(numbers, n => n > 0 && n % 2 == 0)}`);

let x = 1.2345678;
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));

function heigher_order_round(x, prec, func) {
    x = x * Math.pow(10, prec);
    x = func(x);
    return x / Math.pow(10, prec);
}
console.log(`x=${x}`);
console.log(heigher_order_round(x, 2, Math.ceil));
console.log(heigher_order_round(x, 2, Math.floor));
console.log(heigher_order_round(x, 2, Math.round));
