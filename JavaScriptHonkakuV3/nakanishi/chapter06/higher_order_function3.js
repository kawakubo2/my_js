function calcTax(taxRate) {
    return function(price) {
        return Math.floor(price * taxRate);
    }
}

const tax08 = calcTax(0.08);
const tax10 = calcTax(0.1);

const price = 2000;

console.log(`消費税が 8%の場合、${price}円の消費税は${tax08(price)}円です。`);
console.log(`消費税が10%の場合、${price}円の消費税は${tax10(price)}円です。`);