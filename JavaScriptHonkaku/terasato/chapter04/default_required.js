function required() {
    throw new Error('引数の数が不足しています。');
}

function hoge(value = required()) {
    return value;
}

console.log(hoge('abc'));

try {
    hoge();
    console.log('A');
    console.log('B');
} catch(e) {
    console.log(e.message);
}