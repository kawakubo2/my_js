const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}
console.log(`合計: ${sum(numbers)}`);

function positiveSum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正数の合計: ${positiveSum(numbers)}`);

function evenSum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n % 2 === 0) {
            total += n 
        }
    }
    return total;
}

console.log(`偶数の合計: ${evenSum(numbers)}`);

function positiveOddSum(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0 && n % 2 !== 0) {
            total += n;
        }
    }
    return total;
}

console.log(`正の奇数の合計: ${positiveOddSum(numbers)}`);

/**
 * 整数型の配列を受け取り、filter関数がtrueを返す整数のみの合計を返す
 * @param {number} nums 
 * @param {callback} filter 整数値を受け取りboolean型を返す関数 
 * @returns {number} 合計値
 */
function higher_sum(nums, filter) {
    let total = 0;
    for (const n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}
console.log('---< 高階関数を使用 >---');
console.log(`正数の合計: ${higher_sum(numbers, n => n > 0)}`);
console.log(`偶数の合計: ${higher_sum(numbers, n => n % 2 === 0)}`);
console.log(`正の奇数の合計: ${higher_sum(numbers, n => n > 0 && n % 2 !== 0)}`);

function square(nums) {
    const result = [];
    for (const n of nums) {
        result.push(n * n);
    }
    return result;
}

console.log(square(numbers));

function squareRoot(nums) {
    const result = [];
    for (const n of nums) {
        result.push(Math.sqrt(n));
    }
    return result;
}

console.log(squareRoot(numbers));

/**
 * 
 * @param {array} nums 数値型の配列
 * @param {callback} func 数値を1つ受け取り、何らかの加工を施した値を返す関数
 * @returns {array} map関数で加工された数値で置き換えられた配列を返す
 */
function map(nums, func) {
    let result = [];
    for (const n of nums) {
        result.push(func(n));
    }
    return result;
}

console.log(`各要素を二乗した配列: ${map(numbers, n => n * n)}`);
console.log(`各要素を半分にした配列: ${map(numbers, n => n / 2)}`);

function filter(nums, func) {
    let result = [];
    for (const n of nums) {
        if (func(n)) {
            result.push(n); 
        }
    }
    return result;
}

const evenNumbers = filter(numbers, n => n % 2 === 0);
console.log(evenNumbers);

const evenSquareNumbers = map(filter(numbers, n => n % 2 === 0), n => n * n);
console.log(evenSquareNumbers);

// JavaScriptのMath.ceil(切上げ), Math.floor(切り捨て), Math.round(四捨五入)は精度指定
console.log(Math.floor(1.2345));
console.log(Math.floor(1.9999));

let n = 1.23456;
let prec = 3;
console.log(Math.floor(n * Math.pow(10, prec)) / Math.pow(10, prec));
console.log(Math.ceil(n * Math.pow(10, prec)) / Math.pow(10, prec));
console.log(Math.round(n * Math.pow(10, prec)) / Math.pow(10, prec));

function higher_round(num, prec, func) {
    return func(num * Math.pow(10, prec)) / Math.pow(10, prec);
}
console.log('---< 高階関数を使用した例 >---');
console.log(higher_round(n, prec, Math.floor));
console.log(higher_round(n, prec, Math.ceil));
console.log(higher_round(n, prec, Math.round));
