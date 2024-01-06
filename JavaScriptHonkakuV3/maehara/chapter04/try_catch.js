function getLessonRecord() {
    const r = Math.random();
    if (r > 0.8) {
        throw new Error("請求書の作成に失敗しました。");
    }
    console.log("受講記録の取得成功しました。");
}

function createInvoice() {
    const r = Math.random();
    if (r > 0.8) {
        throw new Error("請求書の作成に失敗しました。");
    }
    console.log("請求書の作成に成功しました。");
}

function sendEmail() {
    const r = Math.random();
    if (r > 0.8) {
        throw new Error("メールの送信に失敗しました。");
    }
    console.log('メールの送信に成功しました。');
}

try {
    getLessonRecord();
    createInvoice();
    sendEmail();
} catch(e) {
    console.log(e.message);
}

const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7, 8, 9);
console.log(numbers);

console.log(numbers.slice(2, 5));