const obj = { prop1: 10, prop2: 20, skip: 20, prop3: 23, prop4: 47 };

let total = 0;
for (let key in obj) {
    if (key === 'skip') continue;
    total += obj[key];
}

console.log(`合計: ${total}`);

let map = new Map();
map.set('prop1', 10);
map.set('prop2', 20);
map.set('skip', 20);
map.set('prop3', 23);
map.set('prop4', 47);

let total2 = 0;
for (let [key, value] of map.entries()) {
    if (key === 'skip') continue;
    total2 += value;
}
console.log(`合計: ${total2}`);