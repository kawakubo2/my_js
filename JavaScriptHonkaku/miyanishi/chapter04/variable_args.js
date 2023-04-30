function sum() {
    let result = 0;
    for (let i = 0, len = arguments.length; i < len; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('引数が数値ではありません');
        }
        result += arguments[i];
    }
    return result;
}

console.log(sum(1.1, 2.2, 3.3, 4.4));