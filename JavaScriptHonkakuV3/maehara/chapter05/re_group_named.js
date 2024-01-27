const re = /((?<i11l>\+\d{1,3})-|(?<domestic>0))(?<area>\d{1,3})-(?<city>\d{2,4})-(?<local>\d{4})/g;
const str = 'オフィスの電場何号は092-292-9999です。海外からの発信は+81-92-292-9999です。';

const results = str.matchAll(re);
for (const result of results) {
    console.log(`
    国内発信または国際番号: ${result.groups.i11l ? result.groups.i11l : result.groups.domestic}
    市外局番: ${result.groups.area}
    市内局番: ${result.groups.city}
    加入者番号: ${result.groups.local}
    `);
}

