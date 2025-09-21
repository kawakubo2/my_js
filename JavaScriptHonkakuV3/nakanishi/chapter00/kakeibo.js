document.addEventListener('DOMContentLoaded', () => {
    const headers = ["日付", "費目", "メモ", "入金額", "出金額"];
    const data = [
        {
            date: '2024-02-03',
            category: '食費',
            memo: 'コーヒーを購入',
            income: 0,
            expense: 380
        },
        {
            date: '2024-02-10',
            category: '給料',
            memo: '1月の給料',
            income: 280000,
            expense: 0
        },
        {
            date: '2024-02-11',
            category: '教養娯楽費',
            memo: '書籍を購入',
            income: 0,
            expense: 2800
        },
        {
            date: '2024-02-14',
            category: '交際費',
            memo: '同期会の会費',
            income: 0,
            expense: 5000
        },
    ];

    const table = document.querySelector('#kakeibo');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    for (const header of headers) {
        const th = document.createElement('th');
        th.textContent = header;
        tr.append(th);
    }
    thead.append(tr);
    table.append(thead);
    const tbody = document.createElement('tbody');
    for (const line of data) {
        const tr = document.createElement('tr');
        const td_date = document.createElement('td')
        td_date.textContent = line.date;
        const td_category = document.createElement('td')
        td_category.textContent = line.category;
        const td_memo = document.createElement('td')
        td_memo.textContent = line.memo;
        const td_income = document.createElement('td')
        td_income.textContent = line.income;
        const td_expense = document.createElement('td')
        td_expense.textContent = line.expense;
        tr.append(td_date);
        tr.append(td_category);
        tr.append(td_memo);
        tr.append(td_income);
        tr.append(td_expense);
        tbody.append(tr);
    }
    table.append(tbody);
});