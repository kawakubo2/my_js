const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1_000;
const LOOP_NUM = 10_000;

const array = [];
const set = new Set();

while(set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10憶までの乱数
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}
console.log(`arrayの要素数: ${array.length}`);
console.log(`setの要素数: ${set.size}`);

const random_array = [];
for (let i = 0; i < LOOP_NUM; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
    random_array.push(r);
}

// 二分探索は配列がソート済みであることが前提となる
array.sort((x, y) => x - y);
console.log('---< 配列の二分探索 >---');
const start_array = Date.now();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < LOOP_NUM; i++) {
    // if (array.indexOf(random_array[i]) > -1) { // 線形検索
    if (binary_search(array, random_array[i])) { // 二分探索
        array_ok++;
    } else {
        array_ng++;
    }
}
const end_array = Date.now();
console.log(`検索成功: ${array_ok}`);
console.log(`検索失敗: ${array_ng}`);
console.log(`処理時間: ${end_array - start_array}ms`);

console.log('---< Setの検索 >---');
const start_set = Date.now();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < LOOP_NUM; i++) {
    if (set.has(random_array[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const end_set = Date.now();
console.log(`検索成功: ${set_ok}`);
console.log(`検索失敗: ${set_ng}`);
console.log(`処理時間: ${end_set - start_set}ms`);

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