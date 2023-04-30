function checkDate(year, month, day) {
    let dat = new Date(year, month - 1, day);
    if (year === dat.getFullYear() && month === dat.getMonth() + 1 && day === dat.getDate()) {
        return true;
    } else {
        return false;
    }
}

console.log(checkDate(2020, 2, 29) ? '妥当': '妥当ではない');
console.log(checkDate(2021, 2, 29) ? '妥当': '妥当ではない');