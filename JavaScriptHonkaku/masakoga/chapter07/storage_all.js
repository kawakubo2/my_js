let storage = localStorage;
for (let i = 0, len = storage.length; i < len; i++) {
    let k = storage.key(i);
    let v = storage[k];
    console.log(`${k}: ${v}`);
}