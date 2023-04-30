function add(num1, num2) {
    if (typeof num1 === 'number') {
        throw Error("数値ではない値");
    }
    if (typeof num2 === 'number') {
        throw Error("数値ではない値");
    }
    return num1 + num2;
}
try {
    console.log(add(10, 'abc'));
} catch (e) {
    console.log(e.message);
}