let result;
const re_tel = /(\d{2,4})-(\d{2,4})-(\d{4})/g;

const str = '私の実家の固定電話は092-999-8888で、勤めているの会社の代表番号は03-1111-0000です。'
while ((result = re_tel.exec(str)) != null) {
    let [tel, shigai, shinai, kanyusha] = result;
    console.log('---------------');
    console.log(`固定番号: ${tel}`);
    console.log(`市外局番: ${shigai}`);
    console.log(`市内局番: ${shinai}`);
    console.log(`固定番号: ${kanyusha}`);
}