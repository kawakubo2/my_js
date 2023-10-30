// カリー化
function tax(rate) {
    return function(price) {
        return Math.floor(price * (rate / 100));
    }
}

const tax08 = tax(8);
const tax10 = tax(10);

const price = 1000;
console.log(tax08(price));
console.log(tax10(price));