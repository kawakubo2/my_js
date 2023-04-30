let numbers = [4, 3, -2, 5, 9, 4, 0, -7, 8, 1, 6, 2];

function mysum1(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(`合計: ${mysum1(numbers)}`);

function mysum2(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正数の合計: ${mysum2(numbers)}`);

function mysum3(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 == 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正の偶数の合計: ${mysum3(numbers)}`);

function mysum4(nums) {
    let total = 0;
    for (let n of nums) {
        if (n % 3 == 0) {
            total += n;
        }
    }
    return total;
}

console.log(`3の倍数の合計: ${mysum4(numbers)}`);

function array_sum(filter, nums) {
    let total = 0;
    for (let n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}

function even(n) {
    return n % 2 == 0;
}

console.log(`高階関数版 正の合計: ${array_sum(n => n > 0, numbers)}`);
console.log(`高階関数版 正の偶数の合計: ${array_sum(n => n > 0 && n % 2 == 0, numbers)}`);
console.log(`高階関数版 3の倍数の合計: ${array_sum(n => n % 3 == 0, numbers)}`);
console.log(`高階関数版 偶数の合計: ${array_sum(even, numbers)}`);

function array_filter(nums, filter) {
    let result = [];
    for (let n of nums) {
        if (filter(n)) {
            result.push(n);
        }
    }
    return result;
}

console.log(array_filter(numbers, n => n % 2 == 0));
/*
    let numbers = [1, 2, 3, 4, 5];
    let res = array_map(xxx, numbers);
    # [10, 20, 30, 40, 50]
    let lang = ['python', 'javascript', 'c', 'rust', 'typescript];
    let res2 = array_map(yyy, lang);
    # ['PYTHON', 'JAVASCRIPT', 'C', 'RUST', 'TYPESCRIPT'];
*/

function array_map(func, array) {
    let result = [];
    for (let n of array) {
        result.push(func(n));
    }
    return result;
}

let array1 = [1, 2, 3, 4, 5, 6, 7];
let area_array = array_map(r => Math.pow(r, 2) * Math.PI, array_filter(array1, n => n > 0 && n % 2 == 0));
console.log(area_array);

let area_array2 = array1.filter(n => n > 0 && n % 2 == 0).map(r => Math.pow(r, 2) * Math.PI);
console.log(area_array2);