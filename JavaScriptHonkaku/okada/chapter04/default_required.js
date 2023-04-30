function required() {
    throw new Error('引数が不足しています');
}

function hoge(value = required()) {
    return value;
}

try {
    console.log(hoge());
} catch (e) {
    console.log(e.message);
}