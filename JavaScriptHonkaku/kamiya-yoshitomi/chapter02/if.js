let x = 15;

if (x >= 10) {
    console.log('変数xは10以上です。');
} else {
    console.log('変数xは10未満です。');
}

console.log(`変数xは10${x >= 10 ? "以上": "未満"}です。`);
