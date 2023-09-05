const RANDOM_MAX = 1_000_000_000;
const COLLECTON_SIZE = RANDOM_MAX / 1000;
const LOOP_SIZE = 10_000;

// 配列とSetに100万の乱数を格納
const array = [];
const set = new Set();
while(set.size < COLLECTON_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}
console.log(`array_size: ${array.length}`);
console.log(`set_size: ${set.size}`);

// 1万回テストするので1万要素の乱数の配列を準備
const random_array = [];
while(random_array.length < LOOP_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
    random_array.push(r);
}

array.sort(function(m, n) { return m - n; });
console.log('--- 配列の二分探索 ---');
const array_start = new Date().getTime(); // タイムスタンプ値
let array_ok = 0;
let array_ng = 0;
for (const n of random_array) {
    if (binary_search(array, n)) {
        array_ok++;
    } else {
        array_ng++;
    }
}
const array_end = new Date().getTime(); // タイムスタンプ値
console.log(`処理時間: ${array_end - array_start}`);
console.log(`探索成功: ${array_ok}`)
console.log(`探索失敗: ${array_ng}`)

console.log('--- Setでの探索 ---');
const set_start = new Date().getTime(); // タイムスタンプ値
let set_ok = 0;
let set_ng = 0;
for (const n of random_array) {
    if (set.has(n)) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const set_end = new Date().getTime(); // タイムスタンプ値
console.log(`処理時間: ${set_end - set_start}`);
console.log(`探索成功: ${set_ok}`)
console.log(`探索失敗: ${set_ng}`)

// 二分探索の場合、配列はソート済みであることを想定している
function binary_search(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > array[mid]) {
            left = mid + 1;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}