const arry = [10, '文字列', 20, true, 23, 47];
let total = 0;
for (const item of arry) {
    console.log(typeof item);
    if (typeof item === 'number') {
        total += item;
    }
}
console.log(`合計: ${total}`);