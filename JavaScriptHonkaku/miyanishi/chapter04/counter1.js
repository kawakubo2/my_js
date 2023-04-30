let counter = new Map();

let str = 'ajegaighigea17189yekahgejgaegahghajrgzdngaeqihqqakjbbbarle';

for (let c of str) {
    if (counter.has(c)) {
        counter.set(c, counter.get(c) + 1);
    } else {
        counter.set(c, 1);
    }
}
let keys = Array.from(counter.keys());
keys.sort();

for (let k of keys) {
    console.log(`${k}: ${counter.get(k)}`);
}