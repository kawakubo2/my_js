const fruitMap = new Map([
  ['apple', 200],
  ['orange', 180],
  ['banana', 60]
]);

fruitMap.keys().forEach(fruitName => console.log(fruitName));
fruitMap.values().forEach(price => console.log(price));
fruitMap.entries().forEach(([fruitName, price]) => console.log(`${fruitName}は${price}円です`));

const fruitAssocArray = {
  'apple': 200,
  'orage': 180,
  'banana': 60,
  'grape': 500
};
console.log('-----------------------');
// TODO　連想配列ではなくMapで処理するよう書き換えること
Object.entries(fruitAssocArray)
  .forEach(([name, price]) => console.log(`${name}は${price}円です。`));