function sub(x, y) {
    return x - y;
}

let a = 10;
let b = 8;
let answer = sub(a, b);

console.log(`${a} - ${b} = ${answer}`);

let score = 68;

if (score >= 70) {
    console.log("合格！");
} else {
    console.log("不合格");
}

const numbers = [80000, 70000, 60000, 50000, 85000, 120000, 180000];

let total = 0;
for (const num of numbers) {
    total += num;
}
console.log(`今週の売上合計: ${total}円`);
