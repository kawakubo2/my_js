const re = /(?<area>0\d{1,3})-(?<city>\d{2,4})-(?<local>\d{3,4})/g;
const str = '本社の代表番号は03-3721-9999、福岡支社の代表番号は092-999-8888です。';

let results = str.matchAll(re);
for (const result of results) {
    console.log('--------------------');
    console.log(`市外局番: ${result.groups.area}`);
    console.log(`市内局番: ${result.groups.city}`);
    console.log(`加入者番号: ${result.groups.local}`);
}