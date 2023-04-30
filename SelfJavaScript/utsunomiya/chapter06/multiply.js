function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('引数が数値ではない');
    }
    return x + y;
}

try {
    console.log(multiply(10, 20));
    console.log(multiply(30, 'abc'));
} catch (e) {
    console.log(e.message);
}