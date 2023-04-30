function hello(name) {
    console.log(`こんにちは、${name}さん！`);
}

setTimeout(hello, 3000, '山田太郎');

function triangle(base, height) {
    console.log(base * height / 2);
}

setTimeout(triangle, 3000, 5, 3);