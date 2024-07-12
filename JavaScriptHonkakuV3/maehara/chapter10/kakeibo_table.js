document.addEventListener('DOMContentLoaded', () => {
    const kakeibo_data = [
        {date: '2024-07-03', category: '食費', memo: 'コーヒーを購入', income: 0, expense: 380},
        {date: '2024-07-10', category: '給料', memo: '6月の給料', income: 280000, expense: 0},
        {date: '2024-07-11', category: '教養娯楽費', memo: '書籍を購入', income: 0, expense: 380},
        {date: '2024-07-14', category: '交際費', memo: '同期会の会費', income: 0, expense: 5000},
        {date: '2024-07-18', category: '水道光熱費', memo: '6月の電気代', income: 0, expense: 7680},
    ];

    const tbody = document.querySelector('#tbody');

    function create_tr(kakeibo_data) {
        for (const kakeibo of kakeibo_data) {
            const tr = document.createElement('tr');
            tr.append(create_td(kakeibo.date));
            tr.append(create_td(kakeibo.category));
            tr.append(create_td(kakeibo.memo));
            tr.append(create_td(kakeibo.income));
            tr.append(create_td(kakeibo.expense));
            tbody.append(tr);
        }
    }

    function create_td(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }

    create_tr(kakeibo_data);
});