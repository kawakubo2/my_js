// 現在日時
const d1 = new Date();
console.log(d1.toLocaleString());

// 年月日時分秒をそれぞれ整数で引数に渡す方法
const d2 = new Date(2023, 8, 15, 15, 28, 30);
console.log(d2.toLocaleString());

// 文字列で指定する方法
const d3 = new Date("August 16, 2023 17:29:30");
console.log(d3.toLocaleString());
const d4 = new Date("2023/08/16 17:29:30");
console.log(d4.toLocaleString());

// Unixタイムスタンプ値(1970/1/1 0:0:0からの経過秒)を指定する方法
const d5 = new Date(1692180000000);
console.log(d5.toLocaleString());