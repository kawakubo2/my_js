function showMessage(value) {
    if (arguments.args != 1) {
        throw new Error("引数の数が間違っています: " + arguments.length);
    }
    console.log(value);
}

try {
    showMessage('山田', 'スズキ');
} catch(e) {
    console.log(e.message);
}