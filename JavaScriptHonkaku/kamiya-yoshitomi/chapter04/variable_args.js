function sum() {
    let result = 0;
    for (const a of arguments) {
        if (typeof a !== 'number') {
            throw new Error('引数が数値ではありません: ' + a);
        }
        result += a;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9))
} catch(e) {
    console.log(e.message)
}