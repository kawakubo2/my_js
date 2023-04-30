const RAND_MAX = 1_000_000_000;
const COLLECTION_SIZE = RAND_MAX / 1000;
const LOOP_SIZE = 10_000;

function binary_search(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}

let set1 = new Set();
let ary1 = [];
let test = [];

while(set1.size < COLLECTION_SIZE) {
    let r = Math.floor(Math.random() * RAND_MAX);
    if (!set1.has(r)) {
        set1.add(r);
        ary1.push(r);
    }
}

for (let i = 0; i < LOOP_SIZE; i++) {
    test.push(Math.floor(Math.random() * RAND_MAX));
}

console.log('---< 配列の二分検索 >---');
ary1.sort((x, y) => x - y);
const array_start = Date.now();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < LOOP_SIZE; i++) {
    if (binary_search(ary1, test[i])) {
        array_ok++
    } else {
        array_ng++;
    }
}
const array_end = Date.now();
console.log('成功件数: ' + array_ok);
console.log('失敗件数: ' + array_ng);
console.log('処理時間: ' + (array_end - array_start));

console.log('---< Setの検索 >---');
const set_start = Date.now();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < LOOP_SIZE; i++) {
    if (set1.has(test[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const set_end = Date.now();
console.log('成功件数: ' + set_ok);
console.log('失敗件数: ' + set_ng);
console.log('処理時間: ' + (set_end - set_start));