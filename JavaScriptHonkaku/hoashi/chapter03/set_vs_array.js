const RAND_MAX = 1_000_000_000;
const COLLECTION_SIZE = RAND_MAX / 1_000;
const TEST_COUNT = 10_000;

const array = [];
const set = new Set();
while(set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RAND_MAX + 1);
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}
console.log(array.length);
console.log(set.size);

const test_list = [];
for (let i = 0; i < TEST_COUNT; i++) {
    const r = Math.floor(Math.random() * RAND_MAX + 1);
    test_list.push(r);
}

const binary_search = (array, target) => {
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

array.sort((x, y) => x - y);
console.log("--- 配列の二分探索---");
const array_start = new Date();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < TEST_COUNT; i++) {
    if (binary_search(array, test_list[i])) {
        array_ok++;
    } else {
        array_ng++;
    }
}
const array_end = new Date();
console.log(`成功件数: ${array_ok}`);
console.log(`失敗件数: ${array_ng}`);
console.log(`処理時間: ${array_end - array_start}`);

console.log("--- Setの検索 ---");
const set_start = new Date();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < TEST_COUNT; i++) {
    if (set.has(test_list[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const set_end = new Date();
console.log(`成功件数: ${set_ok}`);
console.log(`失敗件数: ${set_ng}`);
console.log(`処理時間: ${set_end - set_start}`);