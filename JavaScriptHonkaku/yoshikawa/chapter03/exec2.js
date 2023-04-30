const p = /(\d{2,4})-(\d{2,4})-(\d{4})/gi;
const str = '私の会社の代表番号は092-292-9999で、自宅の固定番号は092-999-9999です。';

while ((result = p.exec(str)) !== null) {
    console.log('-------------------');
    console.log(`固定番号　: ${result[0]}`);
    console.log(`市外局番　: ${result[1]}`);
    console.log(`市内局番　: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}