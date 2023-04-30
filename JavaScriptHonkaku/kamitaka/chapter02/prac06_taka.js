const start = new Date();

const a = 1000000000;
const b = 317;
// const x = ((a - (a % b)) / b);
const count = Math.floor(1000000000 / 317);

let sum = 0;
for (let i = 1; i <= count; i++) {
    sum += i;
}
sum *= b;
console.log(`合計: ${sum}`);

console.log(`処理時間: ${new Date() - start}ms`);