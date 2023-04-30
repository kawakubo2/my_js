let tel_pattern = /(\d{2,4})-(\d{2,4})-(\d{4})/g;

let s = '私の職場は092-0000-0000で、自宅の固定電話は092-292-9999です。';

let result = null;
let count = 0;
while ((result = tel_pattern.exec(s)) !== null) {
    if (count++ >= 10) break;
    console.log('電話番号' + result[0]);
    console.log('市外局番' + result[1]);
    console.log('市内局番' + result[2]);
    console.log('加入者番号' + result[3]);
}