function setRate(rate) {
  return function(price) {
    return Math.floor(price * rate);
  }
}

const setRate2 = (rate) = (price) => Math.floor(price * rate);

const tax08 = setRate(0.08);
const tax10 = setRate(0.1);

const price1 = 1000;
const price2 = 2000;

console.log('--- 8 % ---');
console.log(tax08(price1));
console.log(tax08(price2));
console.log('--- 10 % ---');
console.log(tax10(price1));
console.log(tax10(price2));