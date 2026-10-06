const readline = require('readline-sync');

const ans = readline.question('果物名: a: apple, b: banana, g: grape, o: orange > ');

let fruit_info;

const fruit_assoc = {
  a: {
    name: 'リンゴ',
    price: 120,
    weight: '150g'
  },
  b: {
    name: 'バナナ',
    price: 80,
    weight: '300g'
  },
  g: {
    name: 'ブドウ',
    price: 300,
    weight: '400g'
  },
  o: {
    name: 'オレンジ',
    price: 150,
    weight: '180g'
  },
}

// console.log(`${fruit_assoc[ans]['name']}: ${fruit_assoc[ans]['price']}`);
console.log(fruit_assoc[ans]);