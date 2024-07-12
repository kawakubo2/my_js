function tax(rate) {
    return function(price) {
        return Math.floor(price * rate);
    }
}

const tax10 = tax(0.1); // 消費税10%用
const tax08 = tax(0.08); // 消費税8%用

const prices1 = [100, 200, 1000, 500]; // 8%用
const prices2 = [300, 400, 100];

let total1 = 0;
for (const price of prices1) {
    total1 += price;
}
console.log(`消費税8%=${tax08(total1)}円`)
let total2 = 0;
for (const price of prices2) {
    total2 += price;
}
console.log(`消費税10%=${tax10(total2)}円`);