// 関数スコープ total, num, nums
function array_sum(nums)  {
    let total = 0; // -------(1) total 関数スコープ
    for (const num of nums) { // ------(3) ブロックスコープ }に出くわすとスタック領域から削除される
        total += num;
    }
    return total;
}

const numbers = [5, 2, 9, 3, 8, 10, 1, 4, 6, 7];
let total = array_sum(numbers); // ------(2) total グローバルスコープ
console.log(`合計: ${total}`);

console.log('0～10までの偶数の表示');
for (let i = 0; i < 10; i+=2) { // ------(4) i ブロックスコープ
    console.log(i);
} // ------ (4)で宣言した変数iはここで破棄される
console.log('1～10までの奇数の表示');
for (let i = 1; i < 10; i+=2) { // -------(5) i ブロックスコープ (4)のiとは全く関係のない変数となる
    console.log(i);
} // ------ (5)で宣言した変数iはここで破棄される