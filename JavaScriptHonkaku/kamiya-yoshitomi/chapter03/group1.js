// const tel = '私の会社の代表番号は092-292-9999です。自宅の固定電話は03-3721-0564です。';
const tel = '私の会社の代表番号は092-292-9999です。';
const pattern = /(\d{2,4})-(\d{2,4})-(\d{4})/;

const result = tel.match(pattern);
for (let i = 0, len = result.length; i < len; i++) {
    console.log('--------------------')
    console.log(`電話番号: ${result[0]}`);
    console.log(`市外局番: ${result[1]}`);
    console.log(`市内局番: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}


