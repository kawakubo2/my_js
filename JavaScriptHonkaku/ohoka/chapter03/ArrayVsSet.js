const RAND_MAX = 1_000_000_000;
const COLLECTION_SIZE = RAND_MAX / 1000;
const LOOP_COUNT = 10_000;

/*
 ArrayとSetの準備
*/
let array1 = [];
let set1 = new Set();

while (set1.size < COLLECTION_SIZE) {
    let rand = Math.floor(Math.random() * RAND_MAX);
    if (!set1.has(rand)) {
        set1.add(rand);
        array1.push(rand);
    }
}

console.log(`配列の件数: ${array1.length}`);
console.log(`セットの件数: ${set1.size}`);

/*
 テスト用乱数
 LOOP_COUNTの数だけ用意
*/
let rand_list = [];
for (let i = 0; i < LOOP_COUNT; i++) {
    let rand = Math.floor(Math.random() * RAND_MAX);
    rand_list.push(rand);
}

/*
 リスト線形探索
*/

array1.sort((x, y) => x - y);
console.log('---< リストの二分探索 >---');
function binarySearch(array, target) {
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

let array_start = Date.now();
let array_ok = 0;
let array_ng = 0;

for (let i = 0; i < LOOP_COUNT; i++) {
    if (binarySearch(array1, rand_list[i])) {
        array_ok++;
    } else {
        array_ng++;
    }
}
let array_end = Date.now();
console.log(`処理時間: ${array_end - array_start}`);
console.log(`検索成功: ${array_ok}`);
console.log(`検索失敗: ${array_ng}`);

/*
 セットの検索
*/
console.log('---< セットの検索 >---');
let set_start = Date.now();
let set_ok = 0;
let set_ng = 0;

for (let i = 0; i < LOOP_COUNT; i++) {
    if (set1.has(rand_list[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
let set_end = Date.now();
console.log(`処理時間: ${set_end - set_start}`);
console.log(`検索成功: ${set_ok}`);
console.log(`検索失敗: ${set_ng}`);