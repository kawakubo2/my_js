/*
<tr>
    <td>2024-02-03</td>
    <td>食費</td>
    <td>コーヒーを購入</td>
    <td>0</td>
    <td>380</td>
</tr>
*/
const kakeibo = [
    ['2024-02-03', '食費', 'コーヒーを購入', 0, 380],
    ['2024-02-10', '給料', '1月の給料', 280000, 0],
    ['2024-02-11', '教養娯楽日', '書籍を購入', 0, 2800],
    ['2024-02-14', '交際費', '同期会の会費', 0, 5000]
];

function create_td(data, attrs) {
    const td = document.createElement('td');
    if (attrs) {
        for (const attr_name in attrs) {
            td.setAttribute(attr_name, attrs[attr_name]);
        }
    }
    td.textContent = data;
    return td;
}

function create_tr(item) {
    const tr = document.createElement('tr');
    const [date, category, memo, income, expense] = item;
    tr.append(create_td(date));
    tr.append(create_td(category));
    tr.append(create_td(memo));
    tr.append(create_td(income, {'class':'price'}));
    tr.append(create_td(expense, {'class':'price'}));
    return tr;
}

document.addEventListener('DOMContentLoaded', () => {

    const tbody = document.querySelector('#result');
    for (const item of kakeibo) {
        console.log(item);
        const tr = create_tr(item);
        tbody.append(tr);
    }
});