const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1000;
const LOOP_SIZE = 10000;

let a = [];
let s = new Set();
let random_array = [];

function binary_search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
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

while(s.size < COLLECTION_SIZE) {
    let r = Math.floor(Math.random() * RANDOM_MAX);
    if (!s.has(r)) {
        a.push(r);
        s.add(r);
    }
}

for (let i = 0; i < LOOP_SIZE; i++) {
    let r = Math.floor(Math.random() * RANDOM_MAX);
    random_array.push(r);
}

a.sort((x, y) => x - y);

console.log('---< 配列の二分探索 >---');
let array_start = Date.now();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < LOOP_SIZE; i++) {
    if (binary_search(a, random_array[i])) {
        array_ok++;
    } else {
        array_ng++;
    }
}
let array_end = Date.now();
console.log(`成功件数: ${array_ok}`)
console.log(`失敗件数: ${array_ng}`)
console.log('処理時間:' + (array_end - array_start));

console.log('---< Setの検索 >---');
let set_start = Date.now();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < LOOP_SIZE; i++) {
    if (s.has(random_array[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
let set_end = Date.now();
console.log(`成功件数: ${set_ok}`)
console.log(`失敗件数: ${set_ng}`)
console.log('処理時間:' + (set_end - set_start));