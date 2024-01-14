const names = ['山田', '鈴木', '遠藤', '山田', '佐藤', '田中', '加藤', '佐々木', '山田', '佐藤'];
const banme = 4;
let pos = 0;
let count = 0;
let flag = true;
while (true) {
    pos = names.indexOf('山田', pos);
    if (pos === -1) {
        flag = false;
        break;
    }
    count++;
    if (count >= banme) break;
    pos++;
}
if (flag) {
    console.log(`${banme}番目の山田さんのindexは${pos}です。`);
} else {
    console.log(`${banme}番目以降に山田さんはいません。`);
}
