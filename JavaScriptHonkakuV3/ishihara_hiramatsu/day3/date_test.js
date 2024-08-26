const date = new Date(); // 今日の日時を取得
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay()); // 0 - 日, 1 - 月, ..., 6 - 土

function youbi(index) {
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    return weekdays[index];
}

console.log(`今日は${youbi(date.getDay())}曜日です。`);