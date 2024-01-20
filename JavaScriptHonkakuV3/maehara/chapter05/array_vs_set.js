const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1_000;
const TEST_COUNT = 10_000;

const array = [];
const set = new Set();

while(set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億までの乱数を生成
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}

const random_array = [];
for (let i = 0; i < COLLECTION_SIZE; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億までの乱数を生成
    random_array.push(r);
}

console.log('---< 配列の二分探索 >---');
array.sort((n1, n2) => n1 - n2);
const array_start = new Date().getTime();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < TEST_COUNT; i++) {
    const num = random_array[i];
    if (binary_search(array, num)) {
        array_ok++;
    } else {
        array_ng++;
    }
}
const array_stop = new Date().getTime();
console.log(`処理時間: ${array_stop - array_start}ms`);
console.log(`成功件数: ${array_ok}`);
console.log(`失敗件数: ${array_ng}`);

console.log('---< Setの探索 >---');
const set_start = new Date().getTime();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < TEST_COUNT; i++) {
    const num = random_array[i];
    if (set.has(num)) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const set_stop = new Date().getTime();
console.log(`処理時間: ${set_stop - set_start}ms`);
console.log(`成功件数: ${set_ok}`);
console.log(`失敗件数: ${set_ng}`);

function binary_search(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target < array[mid]) {
            right = mid - 1;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
}