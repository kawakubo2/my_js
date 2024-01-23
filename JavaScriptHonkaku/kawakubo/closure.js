function tax(rate) {
    return function (price) {
        return Math.floor(price * rate);
    }
}


const tax08 = tax(0.08);
const tax10 = tax(0.1);

console.log(tax08(1000));
console.log(tax10(200));