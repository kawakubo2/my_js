/*
高階関数

高階関数とは引数に関数を取ったり、
戻り値として関数を返す関数の事
*/

let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function total1(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

// 偶数の合計
function total2(nums) {
    let total = 0;
    for (let n of nums) {
        if (n % 2 == 0) {
            total += n;
        }
    }
}

// 正の偶数の合計
function total3(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0 && n % 2 === 0) {
            total += n;
        }
    }
    return total;
}

// 3の倍数の合計
function total4(nums) {
    let total = 0;
    for (let n of nums) {
        if (n % 3 === 0) {
            total += n
        }
    }
    return total;
}