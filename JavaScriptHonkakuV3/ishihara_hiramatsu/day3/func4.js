/*
関数定義
function 関数名(仮引数1, 仮引数2, ..) {

    return xxx; // xxxは戻り値
}
*/
function sum(nums) {
    let total = 0;
    for (const n of nums) {
        total += n; // total = total + n
    }
    return total;
}

const numbers = [4, 8, 7, 1, 10, 2, 3, 6, 9, 5];
console.log(`合計: ${sum(numbers)}`);