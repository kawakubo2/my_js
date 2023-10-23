function showMessage(value) {
    let args = Array.from(arguments);
    console.log(Array.isArray(args));
    if (args.length !== 1) {
        throw new Error(`引数の数が間違っています: ${args.length}`);
    }
    console.log(value);
}

try {
    showMessage('山田', '鈴木');
} catch (e) {
    console.log(e.message);
}