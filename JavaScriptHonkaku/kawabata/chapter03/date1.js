let date1 = new Date('2020/12/1');
let date2 = getLastDay(copyDate(date1));
let lastDay = date2.getDate();

for (let i = 1; i <= lastDay; i++) {
    console.log(date1.toLocaleDateString());
    date1.setDate(date1.getDate() + 1);
}

function getLastDay(dat) {
    dat.setMonth(dat.getMonth() + 1);
    dat.setDate(0);
    return dat;
}

function copyDate(dat) {
    return new Date(dat.getFullYear(), dat.getMonth(), dat.getDate());
}