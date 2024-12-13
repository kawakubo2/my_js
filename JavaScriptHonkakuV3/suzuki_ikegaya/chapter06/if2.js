/*
時刻に応じて挨拶をする
午前( 0 - 11) おはようございます。
お昼(     12) お昼です。
午後(13 - 18) こんにちは。
夜  (19 - 23) こんばんは
上記以外       時刻の範囲を超えています。
*/

const hours = [-1, 0, 11, 7, 12, 13, 18, 15, 19, 23, 20, 24];

for (const hour of hours) {
    if (hour < 0 || hour > 23) {
        console.log(`${hour}: 時刻の範囲を超えています。`);
    } else if (hour <= 11) {
        console.log(`${hour}: おはようございます。`);
    } else if (hour == 12) {
        console.log(`${hour}: お昼です。`);
    } else if (hour <= 18) {
        console.log(`${hour}: こんにちは。`);
    } else {
        console.log(`${hour}: こんばんは。`);
    }
}
