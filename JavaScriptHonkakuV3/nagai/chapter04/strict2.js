import { add } from './strict1.js';

let total = 0;




for (let i = 1; i <= 100; i++) {
  total += i;
}

console.log(add(1000));


console.log(`合計: ${total}`);