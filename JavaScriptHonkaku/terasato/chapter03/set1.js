const COLLECTION_SIZE = 10_000_000;
const RAND_MAX = COLLECTION_SIZE * 1_000;
const LOOP_COUNT = 10_000;

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

console.log('---< 配列とMapの準備 >---');
const array1 = [];
const set1 = new Set();

while(set1.size < COLLECTION_SIZE) {
    let rand = Math.floor(Math.random() * RAND_MAX) + 1
    if (!set1.has(rand)) {
        set1.add(rand);
        array1.push(rand);
    }
}

console.log('---< テスト用乱数の配列を生成 >---');
const testRandomArray = [];
for (let i = 0; i < LOOP_COUNT; i++) {
    let rand = Math.floor(Math.random() * RAND_MAX) + 1;
    testRandomArray.push(rand);
}

// 二分探索するには配列がソートされている必要がある
array1.sort(function(n1, n2) {
    return n1 - n2;
});

console.log('---< 配列の検索テスト(二分探索) >---');
let arrayStart = Date.now();
let arrayOk = 0;
let arrayNg = 0;
for (let i = 0; i < LOOP_COUNT; i++) {
    if (binarySearch(array1, testRandomArray[i])) {
        arrayOk++;
    } else {
        arrayNg++;
    }
}
let arrayEnd = Date.now();
console.log(`検索成功: ${arrayOk}`);
console.log(`検索失敗: ${arrayNg}`);
console.log(`処理時間: ${arrayEnd - arrayStart}`);

console.log('---< Setの検索テスト >---');
let setStart = Date.now();
let setOk = 0;
let setNg = 0;
for (let i = 0; i < LOOP_COUNT; i++) {
    if (set1.has(testRandomArray[i])) {
        setOk++;
    } else {
        setNg++;
    }
}
let setEnd = Date.now();
console.log(`検索成功: ${setOk}`);
console.log(`検索失敗: ${setNg}`);
console.log(`処理時間: ${setEnd - setStart}`);