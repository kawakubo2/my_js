function create_td(tr, date) {
    const td = document.createElement('td');
    const text = document.createTextNode(date.getDate());
    td.appendChild(text);
    tr.appendChild(td);
}

function deep_copy(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function create_tr(month, date, table, dow) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    const start = deep_copy(date);
    const num = start.getDay() - dow;
    for (let i = 0; i < num; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    for (let i = 1; i <= 31; i++) {
        if (date.getDate() !== 1 && date.getDay() === dow) {
            tr = document.createElement('tr');
            table.appendChild(tr);
        }
        create_td(tr, date);
        date.setDate(date.getDate() + 1);
        if (date.getMonth() + 1 !== month) break;
    }
}

function print_youbi(table, dow, day_or_week) {
    for (let i = 0; i < dow; i++) {
        day_or_week.push(day_or_week.shift());
    }
    console.log(day_or_week);
    const tr = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const th = document.createElement('th');
        const text = document.createTextNode(day_or_week[i]);
        th.appendChild(text);
        tr.appendChild(th);
    }
    table.appendChild(tr);
} 

function prmonth(year, month, parent, dow = 1) {
    const day_or_week = ['日', '月', '火', '水', '木', '金', '土'];
    const table = document.createElement('table');
    parent.appendChild(table);
    print_youbi(table, dow, day_or_week);
    const firstDate = new Date(year, month - 1, 1);
    const date = firstDate;
    create_tr(month, date, table, dow);
}