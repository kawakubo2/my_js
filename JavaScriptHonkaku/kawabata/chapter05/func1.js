function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw Error('引数が数値ではない');
    }
    return x + y;
}

try {
    console.log(add(10, '20'));
} catch(e) {
    console.log(e);
}
