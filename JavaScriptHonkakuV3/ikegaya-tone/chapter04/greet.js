let hour = 19;

for (let hour = -1; hour <= 24; hour++) {
    console.log(`----- ${hour}時 ------`);
    console.log('---< 解法1 >---');
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
    console.log('---< 解法2 >---');
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
    console.log('---< 解法3 >---');
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

}