const d = new Date(2025, 5, 13, 18, 43, 30);
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

const date = new Date();

// 日本語のロケールで表示
console.log(new Intl.DateTimeFormat('ja-JP').format(date));

// アメリカ英語のロケールで表示
console.log(new Intl.DateTimeFormat('en-US').format(date));

// 韓国のロケールで表示
console.log(new Intl.DateTimeFormat('ko-Kr').format(date));
