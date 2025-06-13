const d = new Date();

console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

d.setFullYear(d.getFullYear() + 1);
console.log(d.toLocaleDateString());

// 月末の求め方
const d2 = new Date();
d2.setMonth(d2.getMonth() + 1);
d2.setDate(0);
console.log(d2.toLocaleDateString());

function last_date(d) {
    const tmp = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    tmp.setMonth(tmp.getMonth() + 1);
    tmp.setDate(0);
    return tmp;
}

console.log(last_date(new Date()).toLocaleDateString());