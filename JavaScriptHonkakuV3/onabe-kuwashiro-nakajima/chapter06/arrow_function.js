const getTrapezoid = (upperbase, lowerbase, height) => (upperbase + lowerbase) * height / 2;
console.log(getTrapezoid(4, 6, 8));

const getCircleArea = radius => radius ** 2 * Math.PI;
console.log(getCircleArea(5));

const tax = tax_rate => price => Math.floor(price * tax_rate);
const tax08 = tax(0.08);
const tax10 = tax(0.1);

let price = 1000;
console.log(tax08(price));
console.log(tax10(price));

function tax2(tax_rate) {
    return function(price) {
        return Math.floor(price * tax_rate);
    }
}
const tax08_2 = tax2(0.08);
const tax10_2 = tax2(0.1);
console.log(tax08_2(price));
console.log(tax10_2(price));


