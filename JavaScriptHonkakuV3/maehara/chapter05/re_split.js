const re = /[\/\.\-]/g;

const dates = [
    '2022/12/01',
    '2022-12-01',
    '2022.12.01'
];

const result2 = []
for (const d of dates) {
    const temp = [];
    const array = d.split(re);
    for (const item of array) {
        temp.push(Number.parseInt(item));
    }
    result2.push(temp);
}
console.log(result2);

const result = dates.map((d) => d.split(re).map((n) => Number.parseInt(n)));
console.log(result);
