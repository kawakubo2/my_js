const tels = [
    "092-292-8888",
    "03-3721-0564",
    "0999-22-9999"
];

const pattern = /^(\d{2,4})-(\d{2,4})-(\d{4})$/;

for (const tel of tels) {
    const result = tel.match(pattern);
    console.log('-----------------');
    console.log(`電話番号: ${result[0]}`);
    console.log(`市外局番: ${result[1]}`);
    console.log(`市内局番: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}