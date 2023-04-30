const tel_pattern = /([0-9]{2,4})-([0-9]{2,4})-([0-9]{4})/g;
const s1 = '私の実家の固定電話は099-999-9999で、会社の代表の番号は03-3721-0564です。';
while ((result = tel_pattern.exec(s1)) !== null) {
    console.log('-----------------------');
    console.log(`電話番号: ${result[0]}`);
    console.log(`市外局番: ${result[1]}`);
    console.log(`市内局番: ${result[2]}`);
    console.log(`加入者番号: ${result[3]}`);
}