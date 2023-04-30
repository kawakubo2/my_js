const p = /[\/\.\-]/gi;

const dates = ['2022/2/25', '2022-2-25', '2022.2.25'];


const result = [];
for (const date of dates) {
    result.push(date.split(p).map(n => Number.parseInt(n)));
}

console.log(result);