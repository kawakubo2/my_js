const tels = ['03-3721-9999', '045-777-9999', '092-292-0000'];
const pattern = /^(\d{2,4})-(\d{2,4})-(\d{4})$/

for (const tel of tels) {
    const result = tel.match(pattern);
    console.log('-------------------------')
    console.log(`固定番号: ${result[0]}`)
    console.log(`市外局番: ${result[1]}`);
    console.log(`市内局番: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}