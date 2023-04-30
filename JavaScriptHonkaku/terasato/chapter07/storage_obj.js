const storage = localStorage;
const apple = { name: 'りんご', price: 150, made: '青森' };
storage.setItem('apple', JSON.stringify(apple));
const data = JSON.parse(storage.getItem('apple'));
console.log(data);