const storage = localStorage;

for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    console.log(`${key}: ${storage[key]}`);
}