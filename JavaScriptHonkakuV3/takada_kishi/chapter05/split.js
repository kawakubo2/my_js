const data = [
  '1,2,3,4,5, 6,7 ',
  '8,9,10',
  '11,12,13,14,15'
];

let total = 0;
for (const elem of data) {
  const a = elem.split(',');
  console.log(a);
  for (const n of a) {
    total += Number(n.trim());
  }
}
console.log(`合計: ${total}`);