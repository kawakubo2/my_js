document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {date: '2024-09-03', category: '食費', memo: 'チョコレートを購入', income: 0, expense: 380},
        {date: '2024-09-10', category: '給料', memo: '8月の給料', income: 280000, expense: 0},
        {date: '2024-09-11', category: '教養娯楽費', memo: '書籍を購入', income: 0, expense: 2800},
        {date: '2024-09-14', category: '交際費', memo: '同期会の会費', income: 0, expense: 5000},
    ];

    const tbody = document.querySelector('#tbody');

    function append_trs(data) {
        const fragment = document.createDocumentFragment();
        for (const item of data) {
            fragment.append(create_tr(item));
        }
        tbody.append(fragment);
    }

    function create_tr(item) {
        const tr = document.createElement('tr');
        tr.append(create_td(item['date']));  
        tr.append(create_td(item['category']));  
        tr.append(create_td(item['memo']));  
        tr.append(create_td(item['income']));  
        tr.append(create_td(item['expense']));  
        return tr;
    }

    function create_td(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }

    append_trs(data);
});