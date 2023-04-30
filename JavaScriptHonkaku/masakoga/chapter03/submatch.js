console.log('stringオブジェクトのmatchメソッド')
let tel = '私の家の固定電話番号は092-999-9999です。会社の代表番号は092-000-0000です。';
let tel_pattern = new RegExp('(\\d{2,4})-(\\d{2,4})-(\\d{4})', 'g');
let result = tel.match(tel_pattern);
for (let i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}
 
console.log('正規表現オブジェクトのexecメソッド');
let tel2 = '私の家の固定電話番号は092-999-9999です。会社の代表番号は092-000-0000です。';
let tel_pattern2 = new RegExp('(\\d{2,4})-(\\d{2,4})-(\\d{4})', 'g');
while ((result = tel_pattern2.exec(tel2)) != null) {
    console.log('電話番号:' + result[0]);
    console.log('市外局番:' + result[1]);
    console.log('市内局番:' + result[2]);
    console.log('加入者番号:' + result[3]);
}