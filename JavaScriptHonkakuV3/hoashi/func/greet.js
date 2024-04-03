function greet(hour) {
    if (typeof hour !== 'number' || !/^\d+$/.test(hour)) {
        throw new Error("正の整数値を指定してください。");
    }
    let result = '';
    if (hour > 23) {
        result = '時刻の範囲を超えています。';
    } else if (hour <= 11) {
        result = 'おはようございます。';
    } else if (hour === 12) {
        result = 'お昼です。';
    } else if (hour <= 18) {
        result = 'こんにちは。';
    } else {
        result = 'こんばんは。';
    }
    return result;
}

const data = [0, 7, 11, 12, 13, 15, 18, 19, 21, 23, 24, -1, 15.5, 'abc'];

for (const d of data) {
    try {
        console.log(greet(d));
    } catch (e) {
        console.log(e.message);
    }
}