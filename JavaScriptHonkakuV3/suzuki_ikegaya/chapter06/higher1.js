/*
高階関数(higher order function)
(1) 関数の引数として関数を取る
(2) 関数の戻り値として関数を返す
*/

const numbers = [5, 4, -3, 9, 1, 10, -4, 7, 8, 6, -1, 3, 2];

function sum1(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}
console.log(`全ての要素の合計: ${sum1(numbers)}`);

/*
偶数の合計を求め、返す関数
*/
function sum2(nums) {
    let total = 0;
    for (const n of nums) {
        if (n % 2 === 0) {
            total += n;
        }
    }
    return total;
}
console.log(`偶数の合計: ${sum2(numbers)}`);

/*
正数の合計
*/
function sum3(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0) {
            total += n;
        }
    }
    return total;
}
console.log(`正数の合計: ${sum3(numbers)}`);
/*
正の基数の合計
*/
function sum4(nums) {
    let total = 0;
    for (const n of nums) {
        if (n > 0 && n % 2 !== 0) {
            total += n;
        }
    }
    return total;
}
console.log(`正の基数の合計: ${sum4(numbers)}`);

/*
高階関数の引数として渡す関数をコールバック関数と呼ぶ
*/
function arraySumIf(filter, nums) {
    let total = 0;
    for (const n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
}
console.log('--- 高階関数を使った場合 ---');
console.log(`偶数の合計: ${arraySumIf(n => n % 2 === 0, numbers)}`);
console.log(`整数の合計: ${arraySumIf(n => n > 0, numbers)}`);
console.log(`正の奇数の合計: ${arraySumIf(n => n > 0 && n % 2 !== 0, numbers)}`);