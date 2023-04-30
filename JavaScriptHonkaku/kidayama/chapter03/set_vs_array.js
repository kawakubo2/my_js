/*
 100万の要素を持つArrayとSetから1要素を見つける速度
 を計測する。1回だけだとばらつきがあるので1万回テストする。
 要素は1から10億まで乱数。
*/
const RAND_MAX = 1_000_000_000; // 10億
const COLLECTION_SIZE = RAND_MAX / 1000; // 100万
const LOOP_COUNT = 10_000;

/////////////////////////////////////
// 100万要素を持つArrayとSetの準備
/////////////////////////////////////

const list = [];
const set = new Set();

while (set.size < COLLECTION_SIZE) {
    const rand = Math.floor(Math.random() * RAND_MAX) + 1; // 1～10億の乱数
    if (!set.has(rand)) {
        list.push(rand);
        set.add(rand);
    }
}


/////////////////////////////////////
// 1万回テストするとき、ArrayとSetで
// 同じ乱数を使用する必要がある。そのため、
// 1万の乱数の要素を持った配列を準備する
/////////////////////////////////////

const rand_list = [];
for (let i = 0; i < LOOP_COUNT; i++) {
    const rand = Math.floor(Math.random() * RAND_MAX) + 1; // 1～10億の乱数
    rand_list.push(rand);
}

/////////////////////////////////////
// Arrayのテスト(2分探索)
/////////////////////////////////////

function binarySearch(list, target) {
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

list.sort((x, y) => x - y);
console.log('---< Arrayの2分探索 >---');
let list_ok = 0;
let list_ng = 0;
const list_start = Date.now();
for (let i = 0; i < LOOP_COUNT; i++) {
    if (binarySearch(list, rand_list[i])) {
        list_ok++;
    } else {
        list_ng++;
    }
}
const list_end = Date.now();
console.log(`検索成功: ${list_ok}`);
console.log(`検索失敗: ${list_ng}`);
console.log(`処理時間: ${list_end - list_start}`);

/////////////////////////////////////
// Setのテスト
/////////////////////////////////////

console.log('---< Setの検索 >---');
let set_ok = 0;
let set_ng = 0;
const set_start = Date.now();
for (let i = 0; i < LOOP_COUNT; i++) {
    if (set.has(rand_list[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
const set_end = Date.now();
console.log(`検索成功: ${set_ok}`);
console.log(`検索失敗: ${set_ng}`);
console.log(`処理時間: ${set_end - set_start}`);