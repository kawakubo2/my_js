const numbers = [6, 9, -4, 1, 5, -7, 2, 10, 3, -8, 4, 7, 8, -1, -6];

function sum(nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sum(numbers));

function sumEvenNumber(nums) {
    let total = 0;
    for (const num of nums) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}

console.log(sumEvenNumber(numbers));

// 5以上の奇数の合計
function sumOddNumberOver4(nums) {
    let total = 0;
    for (const num of nums) {
        if (num >= 5 && num % 2 !== 0) {
            total += num;
        }
    }
    return total;
}
console.log(sumOddNumberOver4(numbers));

// 負の偶数の合計
function sumNegativeEvenNumber(nums) {
    let total = 0;
    for (const num of nums) {
        if (num < 0 && num % 2 === 0) {
            total += num;
        }
    }
    return total;
}
console.log(sumNegativeEvenNumber(numbers));

/*
 * 引数:
 *      第1引数: 整数値を受け取り、boolean型を返す関数 
 *      第2引数: 整数型の配列
 * 戻り値:
 *      filterで絞り込まれた数値の合計
 */
function higherSum(filter, nums) {
    let total = 0;
    for (const num of nums) {
        if (filter(num)) {
            total += num;
        }
    }
    return total;
}

console.log('------- 高階関数を使って解く ----------');
console.log(higherSum(n => true, numbers))
console.log(higherSum(n => n % 2 === 0, numbers))
console.log(higherSum(n => n >= 5 && n % 2 !== 0, numbers))
console.log(higherSum(n => n < 0 && n % 2 === 0, numbers))

const numbers2 = [50, 120, 80, 90, 30, -10, 70];

// 0～100の数値の合計
console.log(higherSum(n => n >= 0 && n <= 100, numbers2));