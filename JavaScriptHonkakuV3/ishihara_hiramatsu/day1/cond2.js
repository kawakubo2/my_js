/*
午前( 0 - 11)・・・おはようございます。
正午(12     )・・・お昼です。
午後(13 - 18)・・・こんにちは。
夜  (19 - 23)・・・・こんばんは。
上記以外の場合、時刻の範囲を超えています。
*/
let hour = 15;

for (let hour = -1; hour <= 24; hour++) {
    console.log(hour);
    if (hour < 0 || hour > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (hour <= 11) {
        console.log('おはようございます。');
    } else if (hour === 12) {
        console.log('お昼です。');
    } else if (hour <= 18) {
        console.log('こんにちは。');
    } else if (hour <= 23) {
        console.log('こんばんは。');
    }
}

/*
SQLのCASEと全く同じ

CASE
    WHEN hour < 0 OR hour > 23 THEN '時刻の範囲を超えています。';
    WHEN hour <= 11 THEN 'おはようございます。';
    WHEN hour = 12  THEN 'お昼です。';
    WHEN hour <= 18 THEN 'こんにちは。';
    WHEN hour <= 23 THEN 'こんばんは。';
END AS GREET
*/