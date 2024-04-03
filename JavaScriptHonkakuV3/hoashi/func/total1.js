const numbers = [6, 9, 2, 5, 4, 1, 10, 8, 7, 3];

function sum1(nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum;
}

console.log(sum1(numbers));

function sum2(nums) {
    let sum = 0;
    for (const n of nums) {
        if (n % 2 === 1) {
            sum += n;
        }
    }
    return sum;
}

console.log(sum2(numbers));

function sum3(nums) {
    let sum = 0;
    for (const n of nums) {
        if (n >= 5) {
            sum += n;
        }
    }
    return sum;
}

console.log(sum3(numbers));

function sum4(nums) {
    let sum = 0;
    for (const n of nums) {
        if (n >= 5 && n % 2 === 1) {
            sum += n;
        }
    }
    return sum;
}

console.log(sum4(numbers));

function higher_order_sum(func, nums) {
    let sum = 0;
    for (const n of nums) {
        if (func(n)) {
            sum += n;
        }
    }
    return sum;
}

console.log(higher_order_sum((n) => n % 2 === 1, numbers));
console.log(higher_order_sum((n) => n >= 5, numbers));
console.log(higher_order_sum((n) => n >= 5 && n % 2 === 1, numbers));