function calcConsumptionTax(taxRate) {
  return function(price) {
    return Math.floor(price * taxRate);
  }
}

const tax08 = calcConsumptionTax(0.08);
console.log(tax08(1000));
console.log(tax08(2000));

const calc = taxRate => price => price * taxRate;
const t08 = calc(0.08);
console.log(t08(3000));
console.log(t08(4000));

const t10 = calc(0.1);
console.log(t10(1000));
console.log(t10(5000));

console.log(sub(10, 5));

function sub(x, y) {
  return x - y;
}

// console.log(sub2(5, 10));

// const sub2 = function(x, y) {
//   return x - y;
// }


// console.log(sub3(100, 30));

// const sub3 = (x, y) => x - y;
