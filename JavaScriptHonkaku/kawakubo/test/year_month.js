let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
if (month == 1) {
    year--;
    month = 1;
} else {
    year--;
}


let year_month = [];
if (month)
for (let i = 0; i < 12; i++) {
    year_month.push(year + '/' + (month < 10 ? '0' + month: month))
    if (month == 12) {
        year++;
        month = 1;
    } else {
        month++;
    }
    
}

console.log(year_month);