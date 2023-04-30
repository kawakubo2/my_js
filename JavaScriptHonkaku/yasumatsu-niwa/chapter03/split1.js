const pattern = /[\/\.\-]/;
const dates = ['2022/09/11', '2022-09-11', '2022.09.11'];

for (const date of dates) {
    console.log(date.split(pattern).map(n => Number.parseInt(n)));
}