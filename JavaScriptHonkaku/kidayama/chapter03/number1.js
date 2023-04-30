let x = 0.2;
let y = 0.6;

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
}

const numbers = [-20, -13, -8, -16, -5, -18];
let max = Number.NEGATIVE_INFINITY;
for (const num of numbers) {
    if (num > max) {
        if (num > 0) {
            max = num;
        }
    }
}
if (max !== Number.NEGATIVE_INFINITY) {
    console.log(`正の最大値: ${max}`);
} else {
    console.log("該当データなし");
}

const number2 = 189713581;
console.log(number2.toString(2));
console.log(number2.toString(8));
console.log(number2.toString(16));

console.log(number2.toExponential());

const number3 = 0.0000000000013559;
console.log(number3.toExponential());
const number4 = 10 / 3;
console.log(number4);
console.log(number4.toFixed(2));

const str10 = "123";
console.log(Number.parseInt(str10) * 100);

const str11 = "1.2345";
console.log(Number.parseFloat(str11) * 100);