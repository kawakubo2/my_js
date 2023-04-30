const storage = localStorage;
const apple = {name: 'りんご', price: 150, made: '青森'};
storage.setItem('apple', apple);
const data = storage.getItem('apple');
console.log(data.name);