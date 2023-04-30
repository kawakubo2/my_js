const pattern = /(\d{2,4})-(\d{2,4})-(\d{4})/;

const tels = ['092-292-9999', '045-547-8888', '03-3721-0564'];

for (const tel of tels) {
    const result = tel.match(pattern);
    console.log('------------------------')
    console.log(`市外局番　: ${result[1]}`);
    console.log(`市内局番　: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}