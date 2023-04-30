let tel_pattern = new RegExp('(\\d{2,4})-(\\d{2,4})-(\\d{4})');
let str2 = '私の会社の代表番号は03-3721-0000です。自宅は045-777-9999です。';
// let results2 = str2.match(tel_pattern);
while((r = tel_pattern.exec(str2)) !== null) {
    console.log(tel_pattern.lastIndex);
    console.log('電話番号:' + r[0]);
    console.log('市外局番:' + r[1]);
    console.log('市内局番:' + r[2]);
    console.log('加入者番号:' + r[3]);
}