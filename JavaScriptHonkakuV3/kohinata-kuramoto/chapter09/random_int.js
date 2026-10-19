let count0 = 0;
let count100 = 0;
for (let i = 0; i < 10_000; i++) {
  const rand = Math.floor(Math.random() * 101);
  if (rand < 0 || rand > 100) {
    throw new Error('0～100の範囲外の乱数が発生');
  }
  if (rand === 0) count0++; 
  if (rand === 100) count100++;
  // console.log(rand);
}
console.log(`0が発生した回数: ${count0}`);
console.log(`100が発生した回数: ${count100}`);