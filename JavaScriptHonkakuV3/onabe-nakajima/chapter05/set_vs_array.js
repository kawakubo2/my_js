const RANDOM_MAX = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_MAX / 1_000;
const LOOP_COUNT = 10_000;

// SetにArrayに要素を追加
const set = new Set();
const array = [];
while (set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1; // 1から10憶までの乱数を生成
    if (!set.has(r)) {
        set.add(r);
        array.push(r);
    }
}

// console.log(`配列の要素数: ${array.length}`);
// console.log(`セットの要素数: ${set.size}`);

// 1万の乱数を持った配列を生成
const random_array = [];
for (let i = 0; i < LOOP_COUNT; i++) {
    const r = Math.floor(Math.random() * RANDOM_MAX) + 1;
    random_array.push(r);
}

// 配列の線形探索
const array_start = new Date().getTime();
let array_ok = 0;
let array_ng = 0;
for (let i = 0; i < LOOP_COUNT; i++) {
    if (array.includes(random_array[i])) {
        array_ok++;
    } else {
        array_ng++;
    }
}
const array_end = new Date().getTime();
console.log(`処理時間: ${array_end - array_start}ミリ秒`);