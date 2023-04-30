const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1000;
const LOOP_NUM = 10_000;

const array = [];
const set = new Set();

while (set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億までの乱数
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}

// テスト用の乱数を生成し配列に格納
const random_array = [];
for (let i = 0; i < LOOP_NUM; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億までの乱数
    random_array.push(r);
}

// 二分探索するには配列がソート済みが条件となる
array.sort((x, y) => x - y);
console.log('---< 配列の二分探索 >---');
const list_start = Date.now();
let list_ok = 0;
let list_ng = 0;
for (let i = 0; i < LOOP_NUM; i++) {
    if (binary_search(array, random_array[i])) {
        list_ok++;
    } else {
        list_ng++;
    }
}
const list_end = Date.now();
console.log(`成功件数: ${list_ok}`);
console.log(`失敗件数: ${list_ng}`);
console.log(`処理時間: ${list_end - list_start}`);

console.log('---< Setの検索 >---');
const set_start = Date.now();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < LOOP_NUM; i++) {
    if (set.has(random_array[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const set_end = Date.now();
console.log(`成功件数: ${set_ok}`);
console.log(`失敗件数: ${set_ng}`);
console.log(`処理時間: ${set_end - set_start}`);

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