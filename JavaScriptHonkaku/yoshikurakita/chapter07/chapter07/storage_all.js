const storage = localStorage;
for (let i = 0, len = storage.length; i < len; i++) {
    const k = storage.key(i);
    const v = storage[k];
    console.log(`${k}:${v}`);
}