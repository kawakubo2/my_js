document.addEventListener('DOMContentLoaded', () => {
    const fruits = {banana: 'バナナ', apple: 'リンゴ', grape: 'ブドウ', orange: 'オレンジ', strawberry: 'イチゴ'};

    const myform = document.querySelector('#myform');
    const select = document.createElement('select');
    select.name = 'fruit';
    select.id = 'fruit';
    for (const en in fruits) {
        const option = document.createElement('option');
        option.value = en;
        option.textContent = fruits[en];
        select.append(option);
    }
    myform.append(select);
});
