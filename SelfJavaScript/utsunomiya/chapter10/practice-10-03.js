function youbi(num) {
    let w = ['日', '月', '火', '水', '木', '金', '土'];
    return w[num];
}

const date1 = new Date(2022, 4, 1);
console.log(`${date1.toLocaleDateString()}は${youbi(date1.getDay())}曜日です`);

date1.setMonth(date1.getMonth() + 1);
date1.setDate(0);
console.log(`${date1.toLocaleDateString()}は${youbi(date1.getDay())}曜日です`);

const date2 = new Date(2022, 4, 1);
date2.setDate(date2.getDate() + 30);
console.log(date2.toLocaleDateString());

date2.setMonth(date2.getMonth() + 21);
console.log(date2.toLocaleDateString());
