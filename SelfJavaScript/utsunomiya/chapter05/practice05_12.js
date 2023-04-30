const obj = {
    prop1: 10,
    prop2: '文字列',
    prop3: 20,
    skip: 20,
    prop4: true,
    prop5: 23,
    prop6: 47
};

let total = 0;
for (let key in obj) {
    if (key !== 'skip' && typeof obj[key] === 'number') {
        total += obj[key];
    }
}
console.log(`合計: ${total}`);