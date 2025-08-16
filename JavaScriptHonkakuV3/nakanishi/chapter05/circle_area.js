let x = 0.0;
let y = 0.0;

let count = 0;
let radius = 10;

for (let i = 0; i < 100_000_000; i++) {
    x = Math.random() * radius;
    y = Math.random() * radius;
    let d = Math.hypot(x, y);
    if (d < radius) count++;
}

console.log(`半径${radius}の円の面積は${count / 100_000_000 * (radius * radius) * 4}`)
