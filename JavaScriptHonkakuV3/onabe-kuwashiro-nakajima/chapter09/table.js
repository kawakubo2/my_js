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

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#result');
    for (const item of kakeibo) {
        console.log(item);
        for (const elem of item) {
            console.log(elem);
        }
    }
});