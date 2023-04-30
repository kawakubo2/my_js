function sum() {
    let result = 0;
    for (let i = 0, len = arguments.length;  i < len; i++) {
        let tmp = arguments[i];
        if (typeof tmp !== 'number') {
            throw new Error('引数が数値ではありません。');
        }
        result += tmp;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
    console.log(e.message);
}