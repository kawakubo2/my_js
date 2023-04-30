let times = [-1, 24, 0, 5, 11, 12, 13, 15, 18, 19, 20, 23];

for (const time of times) {
    console.log(`======< ${time}時 >======`)
    console.log('--- 方法1 ---');
    if (time >= 0 && time <= 11) {
        console.log('おはようございます。');
    } else if (time === 12) {
        console.log('お昼です。');
    } else if (time >= 13 && time <= 18) {
        console.log('こんにちは。');
    } else if (time >= 19 && time <= 23) {
        console.log('こんばんは。');
    } else {
        console.log('時刻の範囲を超えています。');
    }

    console.log('--- 方法2 ---');
    if (time < 0 || time > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (time <= 11) {
        console.log('おはようございます。');
    } else if (time === 12) {
        console.log('お昼です。');
    } else if (time <= 18) {
        console.log('こんにちは。');
    } else {
        console.log('こんばんは。');
    }

    console.log('--- 方法3 ---');
    if (time < 0 || time > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (time >= 19) {
        console.log('こんばんは。');
    } else if (time >= 13) {
        console.log('こんにちは。');
    } else if (time === 12) {
        console.log('お昼です。');
    } else {
        console.log('おはようございます。');
    }
}