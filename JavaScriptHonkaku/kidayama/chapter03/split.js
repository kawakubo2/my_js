const p = /[\/\.\-]/gi;
const dates = ['2016/12/04', '2016-12-04', '2016.12.04'];

for (const date of dates) {
    console.log(date.split(p).map(s => Number.parseInt(s)));
}