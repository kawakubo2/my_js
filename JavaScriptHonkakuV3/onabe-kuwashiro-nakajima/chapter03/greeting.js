const gozen = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const ohiru = new Set([12]);
const gogo  = new Set([13, 14, 15, 16, 17, 18]);
const yoru  = new Set([19, 20, 21, 22, 23]);

for (let h = -1; h <= 24; h++) {
    console.log(`\n== ${h}時 ==`)
    console.log('---< 解法1 >---');
    if (h >= 0 && h <= 11) {
        console.log('おはようございます');
    } else if (h === 12) {
        console.log('お昼です。');
    } else if (h >= 13 && h <= 18) {
        console.log('こんにちは。');
    } else if (h >= 19 && h <= 23) {
        console.log('こんばんは。');
    } else {
        console.log('時刻の範囲を超えています。');
    }

    console.log("---< 解法2 >---");
    if (h < 0 || h > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (h <= 11) {
        console.log('おはようございます。');
    } else if (h === 12) {
        console.log('お昼です。');
    } else if (h <= 18) {
        console.log('こんにちは。');
    } else {
        console.log('こんばんは。');
    }

    console.log('---< 解法3 >---');
    if (h < 0 || h > 23) {
        console.log('時刻の範囲を超えています。');
    } else if (h >= 19) {
        console.log('こんばんは。');
    } else if (h >= 13) {
        console.log('こんにちは。');
    } else if (h === 12) {
        console.log('お昼です。');
    } else {
        console.log('おはようございます。');
    }

    console.log('---< 解法4 >---');
    if (gozen.has(h)) {
        console.log('おはようございます。');
    } else if (ohiru.has(h)) {
        console.log('お昼です。');
    } else if (gogo.has(h)) {
        console.log('こんにちは。');
    } else if (yoru.has(h)) {
        console.log('こんばんは。');
    } else {
        console.log('時刻の範囲を超えています。');
    }
}

const spring = new Set([3, 4, 5]);
const summer = new Set([6, 7, 8]);
const autumn = new Set([9, 10, 11]);
const winter = new Set([12, 1, 2]);

for (let m = 0; m <= 13; m++) {
    if (spring.has(m)) {
        console.log(`${m}月は春です`);
    } else if (summer.has(m)) {
        console.log(`${m}月は夏です`);
    } else if (autumn.has(m)) {
        console.log(`${m}月は秋です`);
    } else if (winter.has(m)) {
        console.log(`${m}月は冬です`);
    } else {
        console.log('月の指定に誤りがあります。');
    }
}