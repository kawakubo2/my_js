const kakeibo = [
    {date: '2024-02-03', category: '食費', memo: 'コーヒーを購入', income: 0, expense: 380},
    {date: '2024-02-10', category: '給料', memo: '1月給料', income: 280000, expense: 0},
    {date: '2024-02-11', category: '教養娯楽費', memo: '書籍を購入', income: 0, expense: 2800},
    {date: '2024-02-14', category: '交際費', memo: '同期会の会費', income: 0, expense: 5000},
];

const tbody = document.querySelector('#tbody');

function create_tr(k) {
    const tr = document.createElement('tr');
    tr.append(create_td(k.date));
    tr.append(create_td(k.category));
    tr.append(create_td(k.memo));
    tr.append(create_td(k.income));
    tr.append(create_td(k.expense));
    return tr;
}

function create_td(text) {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

for (const k of kakeibo) {
    tbody.append(create_tr(k));
}