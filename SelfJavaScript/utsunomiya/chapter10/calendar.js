const printHeader = (year, month) => {
    console.log(`      ${year}年${month}月`);
    console.log('日 月 火 水 木 金 土 ');
    let date = new Date(year, month - 1, 1);
    let firstYoubi = date.getDay();
    let s = '';
    for (let i = 0; i < firstYoubi; i++) {
        s += '   ';    
    }
}
const printBody = (year, month) => {
    const date = new Date(year, month - 1, 1);
    let temp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let s = '';
    while (true) {
        if (temp.getMonth() != date.getMonth()) break;
        let dateStr = temp.getDate().toString();
        s += dateStr.length < 2 ? ' ' + dateStr + ' ': dateStr + ' ';
        if (temp.getDay() === 6) {
            console.log(s)
            s = '';
        }
        temp.setDate(temp.getDate() + 1);
    }
    if (s) console.log(s);
}

const printCalendar = (year, month) => {
    printHeader(year, month);
    printBody(year, month);
}

let year = 2022;
let month = 5;
printCalendar(year, month);