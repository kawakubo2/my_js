const storage = localStorage;
for (let i = 0; i < storage.length; i++)  {
    const key = storage.key(i);
    console.log(`${key}: ${storage[key]}`);
}
console.log('---------< Object.entriesを使用する方法------------');
// for (const key in storage) {
//     console.log(`${key}: ${storage[key]}`);
// }
for (const [key, value] of [...Object.entries(storage)]) {
    console.log(`${key}: ${value}`);
}
