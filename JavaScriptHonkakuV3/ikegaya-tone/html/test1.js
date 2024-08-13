const kakeibo = [
    {日付: '2024-02-10', 費目: '給料', メモ: '1月の給料', 入金額: 280000, 出金額: 0},
    {日付: '2024-02-11', 費目: '教養娯楽費', メモ: '書籍を購入', 入金額: 0, 出金額: 2800},
    {日付: '2024-02-14', 費目: '交際費', メモ: '同期会の会費', 入金額: 0, 出金額: 5000},
    {日付: '2024-02-18', 費目: '水道光熱費', メモ: '1月の電気代', 入金額: 0, 出金額: 7560},
]

document.addEventListener('DOMContentLoaded', () => {
    const p_element = document.querySelector('#form-element');
    console.log(p_element.textContent);
    const a_list = document.querySelectorAll('#navbar > a');
    for (const a of a_list) {
        console.log(a.textContent)
    }
    const tbody = document.querySelector('#tbody');
    for (const k of kakeibo) {
        const tr = document.createElement('tr');
        const td_date = document.createElement('td');
        td_date.textContent = k['日付'];
        const td_category = document.createElement('td');
        td_category.textContent = k['費目'];
        const td_memo = document.createElement('td');
        td_memo.textContent = k['メモ'];
        const td_income = document.createElement('td');
        td_income.textContent = k['入金額'];
        const td_expense = document.createElement('td');
        td_expense.textContent = k['出金額'];
        tr.append(td_date);
        tr.append(td_category);
        tr.append(td_memo);
        tr.append(td_income);
        tr.append(td_expense);
        tbody.append(tr);
    }
}); 