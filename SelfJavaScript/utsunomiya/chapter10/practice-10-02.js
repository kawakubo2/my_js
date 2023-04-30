const someday = new Date('2022-05-12T03:12:13.333');
console.log(someday.toLocaleString());

function youbi(num) {
    let w = ['日', '月', '火', '水', '木', '金', '土'];
    return w[num];
}

someday.setDate(15);
console.log(someday.toLocaleString() + ` (${youbi(someday.getDay())})`);

someday.setMonth(7);
console.log(someday.toLocaleString() + ` (${youbi(someday.getDay())})`);

console.log(Date.parse('2022-08-05T12:34:56.789'));