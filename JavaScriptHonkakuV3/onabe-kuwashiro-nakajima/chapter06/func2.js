/*
 0なら日, 1なら月, ..., 6なら土
 0～6以外であればnull
*/
function youbi(num) {
    const dow = ['日', '月', '火', '水', '木', '金', '土'];
    if (num < 0 || num > 6) return null;
    return dow[num];
} 

console.log(youbi(3)); // 水

const today = new Date();
console.log(today.getDay());

function getDayInJapanese(date) {
    return youbi(date.getDay());
}

console.log(getDayInJapanese(new Date()) + '曜日');

function getDateString(date) {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${getDayInJapanese(date)})`;
}

console.log(getDateString(new Date()));