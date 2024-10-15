
const RANDOM_MAX = 10_000_000_000; // 100億
const COLLECTION_SIZE = RANDOM_MAX / 1_000;
const TEST_COUNT = 10_000;

function binarySearch(array, target) {
    let left = 0;
    let right = COLLECTION_SIZE - 1;
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

const set = new Set();
const array = [];

while (set.size < COLLECTION_SIZE) {
    const rand = Math.floor(Math.random() * RANDOM_MAX) + 1;
    if (!set.has(rand)) {
        set.add(rand);
        array.push(rand);
    }
}
console.log(`setの要素数: ${set.size}`);
console.log(`arrayの要素数: ${array.length}`);

// let counter = 0;
// for (const n of array) {
//     if (set.has(n)) counter++;
// }
// console.log(COLLECTION_SIZE === counter ? '〇': '×');

const randomArray = [];
for (let i = 0; i < TEST_COUNT; i++) {
    randomArray.push(Math.floor(Math.random() * RANDOM_MAX) + 1);
}

array.sort((n1, n2) => n1 - n2);
console.log('---< 配列の二分探索 >---');
let arrayOk = 0;
let arrayNg = 0;
console.time('Arrayの検索時間');
for (let i = 0; i < TEST_COUNT; i++) {
    if (binarySearch(array, randomArray[i])) {
        arrayOk++;
    } else {
        arrayNg++;
    }
}
console.timeEnd('Arrayの検索時間');
console.log(`検索成功: ${arrayOk}`);
console.log(`検索失敗: ${arrayNg}`);

console.log('---< Setの探索 >---');
let setOk = 0;
let setNg = 0;
console.time('Setの検索時間');
for (let i = 0; i < TEST_COUNT; i++) {
    if (set.has(randomArray[i])) {
        setOk++;
    } else {
        setNg++;
    }
}
console.timeEnd('Setの検索時間');
console.log(`検索成功: ${setOk}`);
console.log(`検索失敗: ${setNg}`);