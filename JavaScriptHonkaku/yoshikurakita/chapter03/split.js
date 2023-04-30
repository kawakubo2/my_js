let p = /[\/\.\-]/;

let dates = ['2016/12/04', '2016-12-04', '2016.12.04'];

let date_array = dates.map(d => d.split(p).map(e => Number.parseInt(e)));

console.log(date_array);

let date_array2 = [];
for (let d of dates) {
    let a = d.split(p);
    let temp = [];
    for (let e of a) {
        temp.push(Number.parseInt(e));
    }
    date_array2.push(temp);
}
console.log(date_array2);

function date2intarray(str_date) {
    let p = /[\/\.\-]/;
    // return str_date.split(p).map(e => Number.parseInt(e));
    let result = [];
    let temp = str_date.split(p);
    for (let s of temp) {
        result.push(Number.parseInt(s));
    }
    return result;
}

console.log(date2intarray('2021-08-17'));