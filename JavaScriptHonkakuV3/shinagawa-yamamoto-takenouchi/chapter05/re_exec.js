let result;
const re_tel = /(\d{2,4})-(\d{2,4})-(\d{4})/g;

const str = '私の実家の固定電話は092-999-8888で、勤めているの会社の代表番号は03-1111-0000です。'

// re.exec(str)
while ((result = re_tel.exec(str)) != null) {
    let [tel, shigai, shinai, kanyusha] = result;
    console.log('---------------');
    console.log(`固定番号: ${tel}`);
    console.log(`市外局番: ${shigai}`);
    console.log(`市内局番: ${shinai}`);
    console.log(`固定番号: ${kanyusha}`);
}

// str.matchAll(re)
console.log('---<str.matchall(re)を使った例 >---');
const results = str.matchAll(re_tel);
for (const [tel, shigai, shinai, kanyusha] of results) {
    console.log(`固定番号: ${tel}`);
    console.log(`市外局番: ${shigai}`);
    console.log(`市内局番: ${shinai}`);
    console.log(`固定番号: ${kanyusha}`);
}

// 配列の分割代入
const array = ['山田太郎', 48, 172, 80.5];
const [name, age, height, weight] = array;
console.log(`名前: ${name}`);
console.log(`年齢: ${age}`);
console.log(`身長: ${height}`);
console.log(`体重: ${weight}`);