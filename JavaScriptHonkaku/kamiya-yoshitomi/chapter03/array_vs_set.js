// array_vs_set.js
/*
 1～10億の乱数を100万個格納したArrayとSetの中に
 指定した要素が存在するかを判定するのに要する時間
 を計測する。
*/
const RAND_MAX = 1_000_000_000; // 10億
const COLLECTION_SIZE = RAND_MAX / 1000; // ArrayとSetの要素数 100万
const LOOP_NUM = 10_000; // 1万

const array = [];
const set = new Set();

// 乱数を100万個格納したArrayとSet
while(set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RAND_MAX) + 1;
    if (!set.has(r)) {
        set.add(r);
        array.push(r);
    }
}

/*
 1万回のテストを行うがArrayとSetで同じ乱数でテストしたいので
 あらかじめ1万個の乱数を用意しておく
*/

const random_list = [];
for (let i = 0; i < LOOP_NUM; i++) {
    random_list.push(Math.floor(Math.random() * RAND_MAX));
}

array.sort(function(x, y) {
    return x - y;
});

// Arrayの二分探索
function binary_search(array, target) {
    let left = 0;
    let right = array.length - 1;
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

let list_start = Date.now(); // Date.now()は非推奨だが、performance.now()が使用できないので使う
let list_ok = 0; // 検索に成功した件数
let list_ng = 0; // 検索に失敗した件数
for (let i = 0; i < LOOP_NUM; i++) {
    if (binary_search(array, random_list[i])) {
        list_ok++;
    } else {
        list_ng++;
    }
}
let list_end = Date.now();
console.log(`検索成功: ${list_ok}`);
console.log(`検索失敗: ${list_ng}`);
console.log(`処理時間: ${list_end - list_start}`);

// Setの検索
let set_start = Date.now(); // Date.now()は非推奨だが、performance.now()が使用できないので使う
let set_ok = 0; // 検索に成功した件数
let set_ng = 0; // 検索に失敗した件数
for (let i = 0; i < LOOP_NUM; i++) {
    if (set.has(random_list[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
let set_end = Date.now();
console.log(`検索成功: ${set_ok}`);
console.log(`検索失敗: ${set_ng}`);
console.log(`処理時間: ${set_end - set_start}`);