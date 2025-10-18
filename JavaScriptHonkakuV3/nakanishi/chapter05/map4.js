const prices = new Map([
    ['banana', 100],
    ['apple', 150],
    ['grape', 300]
]);

const fruit = 'grape';
console.log(`${fruit}の価格は${prices.get(fruit)}円です`);