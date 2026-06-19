const str = '私の実家の固定番号092-292-1234で、勤務先の固定番号は03-3701-9999です。';
const tel = /(\d{2,4})-(\d{2,4})-(\d{4})/g;

const result = str.matchAll(tel);
for (const r of result) {
  console.log('-----------------------------');
  console.log(`電場番号　: ${r[0]}`);
  console.log(`市外局番　: ${r[1]}`);
  console.log(`市内局番　: ${r[2]}`);
  console.log(`加入者番号: ${r[3]}`);
}