const RANDOM_RAM = 1_000_000_000;
const COLLECTION_SIZE = RANDOM_RAM / 1_000;
const LOOP_NUM = 10_000;

const array = [];
const set = new Set();

while(set.size < COLLECTION_SIZE) {
    const r = Math.floor(Math.random() * RANDOM_RAM) + 1; // 1～10憶までの乱数
    if (!set.has(r)) {
        array.push(r);
        set.add(r);
    }
}
console.log(`arrayの要素数: ${array.length}`);
console.log(`setの要素数: ${set.size}`);