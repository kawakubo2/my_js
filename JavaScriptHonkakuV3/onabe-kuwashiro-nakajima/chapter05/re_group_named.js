const re = /(?<area>0\d{1,3})-(?<city>\d{2,4})-(?<local>\d{3,4})/;
const str = 'オフィスの電話番号は000-111-3333です。';

const result = str.match(re);
console.log(`
市外局番: ${result.groups.area}
市内局番: ${result.groups.city}
加入者番号: ${result.groups.local}
`);