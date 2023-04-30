const d1 = new Date();
console.log(d1.getFullYear());
console.log(d1.getMonth() + 1);
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());

const dow = ['日', '月', '火', '水', '木', '金', '土'];
console.log(dow[d1.getDay()]);

const d2 = new Date(2017, 4, 15, 11, 40);
console.log(d2.toString());
console.log(d2.toLocaleString());

d2.setMonth(d2.getMonth() + 3);
console.log(d2.toLocaleString());
d2.setDate(d2.getDate() - 20);
console.log(d2.toLocaleString());

d2.setHours(d2.getHours() + 20);
console.log(d2.toLocaleString());

function checkdate(year, month, date) {
    const d = new Date(year, month - 1, date);
    return year == d.getFullYear() && month == (d.getMonth() + 1) && date == d.getDate();
}

console.log(checkdate(2022, 2, 28));
console.log(checkdate(2022, 2, 29));