const p = /[\/.-]/;

const dates = ["2023-02-14", "2023/02/14", "2023.02.14"];

const result = [];
for (let date of dates) {
    result.push(date.split(p).map(n => Number.parseInt(n)));
}
console.log(result);