let a = 30;
let b = 20;
let c = -10;
let d = 0;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} / ${d} = ${a / d}`);
console.log(`${c} / ${d} = ${c / d}`);

const hit_number = 556;
const lots = [813711, 660172, 189556, 717181, 100372];

for (let lot of lots) {
    if (lot % 1000 === hit_number) {
        console.log(`${lot}は当たりです。`);
    } else {
        console.log(`${lot}は外れです。`);
    }
}

const members = ['山田', '鈴木', '田中', '加藤', '横山'];
for (let i = 0; i < 30; i++) {
    console.log(`今日の当番は${members[i % members.length]}`);
}

console.log('--- 前置インクリメント ---');
let x = 10;
console.log(++x);
console.log('--- 後置インクリメント ---');
let y = 10;
console.log(y++);
console.log('--- 前置デクリメント ---');
let w = 10;
console.log(--w)
console.log('--- 後置デクリメント ---');
let z = 10;
console.log(z--);