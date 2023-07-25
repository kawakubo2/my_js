function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) { // うるう年の判定
        return 1;
    } else {
        return 0;
    }
}

function getLastDay(year, month) {
    const lastDay = [
        [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    ];
    return lastDay[isLeapYear(year)][month];
}

function nextDate({year, month, day}) {
    if (getLastDay(year, month) === day) {
        if (month === 12) {
            year += 1;
            month = 1;
            day = 1;
        } else {
            month += 1;
            day = 1
        }
    } else {
        day += 1;
    }
    return { year, month, day };
}

function prevDate(year, month, day) {

}


let date = { year: 2023, month: 12, day: 31 };
for (let i = 0; i < 367; i++) {
    date = nextDate(date);
    console.log(`${date.year}-${date.month < 10 ? '0' + date.month: date.month}-${date.day < 10 ? '0' + date.day : date.day}`);
}
