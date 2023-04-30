/*
youbi(2022, 9, 26) ---> 月
*/
function youbi(year, month, date) {
    const wod = ['日', '月', '火', '水', '木', '金', '土'];
    const d = new Date(year, month - 1, date);
    return wod[d.getDay()];
}

console.log(youbi(2022, 9, 26));