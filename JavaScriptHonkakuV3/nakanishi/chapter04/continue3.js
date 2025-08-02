const scores = [90, 68, 78, 80, -70, 100, 55, 68, 120, 58];

let total = 0;

for (const score of scores) {
    if (score < 0 || score > 100) continue;
    total += score;
}

console.log(`合計: ${total}`);