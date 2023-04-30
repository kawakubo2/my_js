let array1 = [123, 23.45, 'ABCDEFG'];

for (let item of array1) {
    try {
        console.log(item.toLowerCase());
    } catch (e) {
        console.log('文字列を入力してください');
    }
}

let array2 = ['123ab', 'abc', 12345.678];

for (let item of array2) {
    try {
        console.log(item.toExponential());
    } catch (e) {
        console.log('数値を入力してください。');
    }
}