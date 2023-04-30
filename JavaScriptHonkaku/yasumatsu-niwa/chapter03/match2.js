const tels = ['092-292-9999', '03-3721-0564', '045-222-0000'];
const pattern = /^(\d{2,4})-(\d{2,4})-(\d{4})/;

for (const tel of tels) {
    console.log('---------------------');
    const result = tel.match(pattern);
    if (result.lenght !== 0) {
        console.log(`固定番号　: ${result[0]}`);
        console.log(`市外局番　: ${result[1]}`);
        console.log(`市内局番　: ${result[2]}`);
        console.log(`加入者番号: ${result[3]}`);
    }
}