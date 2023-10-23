function greet(hour) {
    let result = null;
    if (!Number.isInteger(hour)) {
        throw new Error("時刻は0～23の範囲の整数値を入力してください。");
    }
    if (hour < 0 || hour > 23) {
        result = '時刻の範囲を超えています。'
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

for (let h = -1; h <= 24; h++) {
    console.log(`---< ${h}時 >---`);
    console.log(greet(h));
}