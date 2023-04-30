// ListVsSet.js
const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1000;
const LOOP_NUM = 10_000;

const list = [];
const set = new Set();

while(set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億までの乱数
    if (!set.has(r)) {
        list.push(r);
        set.add(r);
    }
}

// 10000の乱数
const random_list = [];
for (let i = 0; i < LOOP_NUM; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1～10億までの乱数
    random_list.push(r);
}

console.log('---< Listの二分検索 >---');
list.sort((x, y) => x - y);
const list_start = Date.now();
let listOk = 0;
let listNg = 0;
for (let i = 0; i < LOOP_NUM; i++) {
    if (binary_search(list, random_list[i])) {
        listOk++;
    } else {
        listNg++;
    }
}
const list_end = Date.now();
console.log(`成功件数: ${listOk}`);
console.log(`失敗件数: ${listNg}`);
console.log(`処理時間: ${list_end - list_start}`);

console.log('---< Setの検索 >---');
const set_start = Date.now();
let setOk = 0;
let setNg = 0;
for (let i = 0; i < LOOP_NUM; i++) {
    if (set.has(random_list[i])) {
        setOk++;
    } else {
        setNg++;
    }
}
const set_end = Date.now();
console.log(`成功件数: ${setOk}`);
console.log(`失敗件数: ${setNg}`);
console.log(`処理時間: ${set_end - set_start}`);

function binary_search(list, target) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > list[mid]) {
            left = mid + 1;
        } else if (target < list[mid]) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}