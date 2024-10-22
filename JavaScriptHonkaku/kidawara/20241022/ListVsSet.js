const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1_000;
const TEST_COUNT = 10_000;

console.log('---< ArrayとSetの準備 >---');
const array = [];
const set   = new Set();
while (set.size < COLLECTION_SIZE) {
    const random = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億の乱数を生成
    if (!set.has(random)) {
        array.push(random);
        set.add(random);
    }
}

console.log('---< テスト用の乱数を1万件用意 >---');
const random_list = [];
for (let i = 0; i < TEST_COUNT; i++) {
    const random = Math.floor(Math.random() * RANDOM_MAX) + 1;
    random_list.push(random);
}

console.log('---< 配列の二分探索 >---');
let array_ok = 0;
let array_ng = 0;
// 二分探索のためのソート
array.sort((a, b) => a - b);
const start_array = Date.now();
for (let i = 0; i < TEST_COUNT; i++) {
    // if (array.includes(random_list[i])) {
    if (binary_search(array, random_list[i])) {
        array_ok++;
    } else {
        array_ng++;
    }
}
console.log(`処理時間: ${Date.now() - start_array}`);
console.log(`検索成功: ${array_ok}`);
console.log(`検索失敗: ${array_ng}`);

console.log('---< Setの探索 >---');
let set_ok = 0;
let set_ng = 0;
const start_set = Date.now();
for (let i = 0; i < TEST_COUNT; i++) {
    if (set.has(random_list[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
console.log(`処理時間: ${Date.now() - start_set}`);
console.log(`検索成功: ${set_ok}`);
console.log(`検索失敗: ${set_ng}`);

function binary_search(array, target) {
    let left = 0;
    let right = array.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
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