const dates = ['2022-09-16', '2022/09/16', '2022.09.16'];
const p = /[\/.-]/gi;

for (const date of dates) {
    console.log(new Date(date).toLocaleDateString());
    console.log(datestr2date(date).toLocaleDateString());
}

function date2intarray(date_str) {
    return date_str.split(/[\/.-]/).map(n => Number.parseInt(n));
}

function datestr2date(date_str) {
    return new Date(...date2intarray(date_str));
}



