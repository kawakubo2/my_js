const COLLECTION_SIZE = 1_000_000;
const RANDOM_MAX = COLLECTION_SIZE * 1000;
const LOOP_COUNT = 10000;

let array = [];
let set = new Set();
let rand_array = [];

while(set.size < COLLECTION_SIZE) {
    let r = Math.floor(Math.random() * RANDOM_MAX);
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}

for (let i = 0; i < LOOP_COUNT; i++) {
    let r = Math.floor(Math.random() * RANDOM_MAX);
    rand_array.push(r);
}

console.log('set size=' + set.size);
console.log('array size=' + array.length);

console.log("---< 配列の検索 >---");
let array_start = Date.now();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < LOOP_COUNT; i++) {
    if (array.indexOf(rand_array[i]) == -1) {
        array_ng++;
    } else {
        array_ok++;
    }
}
let array_end = Date.now();
console.log('成功件数:' + array_ok);
console.log('失敗件数:' + array_ng);
console.log('処理時間:' + (array_end - array_start))

console.log("---< セットの検索 >---");
let set_start = Date.now();
let set_ok = 0;
let set_ng = 0;
for (let i = 0; i < LOOP_COUNT; i++) {
    if (set.has(rand_array[i])) {
        set_ok++;
    } else {
        set_ng++;
    }
}
let set_end = Date.now();
console.log('成功件数:' + set_ok);
console.log('失敗件数:' + set_ng);
console.log('処理時間:' + (set_end- set_start))