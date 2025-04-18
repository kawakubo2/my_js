const data = ['apple', 'orange', 'banana'];

for (const value of data) {
  console.log(value);
}

const scores = [
  [ 70, 60, 50, 40, 30 ],
  [ 15, 25, 35, 45, 55 ],
  [ 60, 65, 70, 75, 80 ],
];

let kokugo_total = 0;
let sugaku_total = 0;
let eigo_total = 0;
let rika_total = 0;
let shakai_total = 0;
for (const student_score of scores) {
  const [kokugo, sugaku, eigo, rika, shakai] = student_score;
  let total = kokugo + sugaku + rigo + rika + shakai;
  kokugo_total += sugaku;
  sugaku_total += sugaku;
  eigo_total += eigo;
  rika_total += rika;
  shakai_total += shakai;


  console.log(`合計: ${total}`);
}
console.log(`国語合計: ${kokugo_total}`);

console.log('--- インデックスを使用した解き方 ---');
for (let i = 0; i < scores.length; i++) {
  let total = 0;
  for (let j = 0; j < scores[i].length; j++) {
    total += scores[i][j];
  }
  console.log(`合計: ${total}`);
}