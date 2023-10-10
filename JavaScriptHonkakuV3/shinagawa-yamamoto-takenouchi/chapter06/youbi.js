/*
0 ---> 日, 1 ---> 月, ... , 6 ---> 土
引数の数値の値に応じて日本語の曜日名を返す関数
*/
function num2youbi(num) {
    if (num < 0 || num > 6) {
        throw new Error(`${num}は0～6以外の数値です。`);
    }
    const dow = ["日", "月", "火", "水", "木", "金", "土"];
    return dow[num];
}

function youbi(strDate) {
    const date = new Date(strDate);
    return num2youbi(date.getDay());
}


const today = "2023-10-10";
console.log(`${new Date(today).toLocaleDateString()}は${youbi(today)}曜日です。`);