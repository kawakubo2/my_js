const tel_re = /(\d{2,4})-(\d{2,4})-(\d{4})/g;

const str = '私の実家の固定番号は092-999-9999で、会社の代表番号は03-3721-9999です。';
const results = str.matchAll(tel_re);
for (const result of results) {
    console.log('-----------------------');
    console.log(`電話番号: ${result[0]}`);
    console.log(`市外局番: ${result[1]}`);
    console.log(`市内局番: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}