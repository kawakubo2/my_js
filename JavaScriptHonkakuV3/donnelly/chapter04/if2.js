/*
時刻(0-23)に応じて挨拶を表示したい。
午前( 0 - 11)・・・おはようございます。
正午(12     )・・・お昼です。
午後(13 - 18)・・・こんにちは。
夜　(19 - 23)・・・こんばんば。
上記以外・・・・・・時刻の範囲を超えています。
*/

const beforenoon = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const noon = new Set([12]);
const afternoon = new Set([13, 14, 15, 16, 17, 18]);
const night = new Set([19, 20, 21, 22, 23]);

for (let hour = -1; hour <= 24; hour++) {
    console.log(`\n== ${hour}時 ==`);
    console.log('---< 方法1 >---');
    if (hour >= 0 && hour <= 11) {
        console.log('おはようございます。');
    } else if (hour === 12) {
        console.log('お昼です。');
    } else if (hour >= 13 && hour <= 18) {
        console.log('こんにちは。');
    } else if (hour >= 19 && hour <= 23) {
        console.log('こんばんは。');
    } else {
        console.log('時刻の範囲を超えています。');
    }

    console.log('---< 方法2 >---');
    if (hour < 0 || hour > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (hour <= 11) {
        console.log('おはようございます。');
    } else if (hour === 12) {
        console.log('お昼です。');
    } else if (hour <= 18) {
        console.log('こんにちは。');
    } else {
        console.log('こんばんは。');
    }

    console.log('---< 方法3 >---');
    if (hour < 0 || hour > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (hour >= 19) {
        console.log('こんばんは。');
    } else if (hour >= 13) {
        console.log('こんにちは。');
    } else if (hour === 12) {
        console.log('お昼です。');
    } else {
        console.log('おはようございます。');
    }

    console.log('---< 方法4 >---');
    if (beforenoon.has(hour)) {
        console.log('おはようございます。');
    } else if (noon.has(hour)) {
        console.log('お昼です。');
    } else if (afternoon.has(hour)) {
        console.log('こんにちは。');
    } else if (night.has(hour)) {
        console.log('こんばんは。');
    } else {
        console.log('時刻の範囲を超えています。');
    }
}
