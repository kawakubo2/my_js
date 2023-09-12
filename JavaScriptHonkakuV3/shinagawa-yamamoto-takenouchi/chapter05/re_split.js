const re = /[\/\.-]/g;

const dates = ['2023/09/12', '2023-09-12', '2023.09.12'];

const result = [];
for (const date of dates) {
    const str = date.split(re);
    const result2 = [];
    for (const s of str) {
        result2.push(Number.parseInt(s));
    }
    result.push(result2);
}
console.log(result);

for (const date of dates) {
    console.log(date.split(re).map(d => Number.parseInt(d)));
}
console.log(dates.map(s => s.split(re).map(d => Number.parseInt(d))));