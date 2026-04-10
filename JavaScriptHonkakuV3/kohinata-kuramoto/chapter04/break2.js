/*
1日目に1平米だった藻が1日に2倍ずつ増えるとすると
1万平米の池は何日で藻でいっぱいになりますか？
*/

const AREA_OF_POND = 10_000;
let day = 1;
let total = 1;

while (true) {
  if (total >= AREA_OF_POND) break;
  total *= 2;
  day++;
}

console.log(`池が藻でいっぱいになるのは${day}日目です。`);
