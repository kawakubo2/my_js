function hello() {
    return 'Hello, World!';
}

console.log(hello());

function hello2(personName) {
    if (typeof personName !== 'string') {
        console.log('引数に文字列を渡してください。');
        return;
    }
    console.log(`こんにちは、{personName}さん。`);
}

hello2();
hello2('山田太郎');