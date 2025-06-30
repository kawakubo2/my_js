const pattern = /(?<shigai>\d{2,4})-(?<shinai>\d{2,4})-(?<kanyusha>\d{4})/g;

const s = '本社の代表番号は03-1234-5678で、大阪支社の番号は06-5678-9012です。';

console.log('------ RegExp#exec -------');
while ((result = pattern.exec(s)) != null) {
    console.log('--------------------------')
    console.log(`電話番号: ${result[0]}`);
    console.log(`市外局番: ${result.groups.shigai}`);
    console.log(`市内局番: ${result.groups.shinai}`);
    console.log(`加入者番号: ${result.groups.kanyusha}`);
}

console.log('------ string#matchAll(2020以降) -------');
const result2 = s.matchAll(pattern);
for (const r of result2) {
    console.log('--------------------------')
    console.log(`電話番号: ${r[0]}`);
    console.log(`市外局番: ${r[1]}`);
    console.log(`市内局番: ${r[2]}`);
    console.log(`加入者番号: ${r[3]}`);
}