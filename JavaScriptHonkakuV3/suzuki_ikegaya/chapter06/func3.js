/*
時刻(整数値)を引数として取り、挨拶返す関数
*/

function greet(hour) {
    let result = '';
    if (hour < 0 || hour > 23) {
        result = '時刻の範囲を超えています。';
    } else if (hour <= 11) {
        result = 'おはようございます。';
    } else if (hour == 12) {
        result = 'お昼です。'
    } else if (hour <= 18) {
        result = 'こんにちは。';
    } else {
        result = 'こんばんは。';
    }
    return result;
}

const hours = [-1, 0, 11, 5, 12, 13, 18, 15, 19, 23, 20, 24];
for (const hour of hours) {
    console.log(`${hour}: ${greet(hour)}`);
}