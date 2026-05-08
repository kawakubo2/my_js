const data = '5,10,3,1,4,8,7,6,9,2';

let total = 0;

const temp = data.split(',');

for (const n of temp) {
  total += Number.parseInt(n.trim());
}

console.log(`合計: ${total}`);

const total2 = data
                .split(',')
                .map(n => Number.parseInt(n))
                .filter(n => n % 2 === 0)
                .reduce((total, n) => total + n);
console.log(`合計: ${total2}`);

