const list = [23, 78, 18, 72, 98, 39, 51, 40];
let min = list[0];
for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
        min = list[i];
    }
}

console.log(`最小値: ${min}`);