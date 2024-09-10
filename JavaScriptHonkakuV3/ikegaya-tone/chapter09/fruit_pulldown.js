document.addEventListener('DOMContentLoaded', () => {
    // 本来は外部から取得する
    const fruits = {banana: 'バナナ', apple: 'リンゴ', orange: 'オレンジ',
                    grape: 'ブドウ', strawberry: 'イチゴ'};

    const form2 = document.querySelector('#form2');
    const fruit_select = document.createElement('select');
    fruit_select.name = 'fruit_select';
    fruit_select.id = 'fruit_select';
    for (const fruit_en in fruits) {
        const option = document.createElement('option');
        option.value = fruit_en;
        option.textContent = fruits[fruit_en];
        fruit_select.append(option);
    }
    form2.append(fruit_select);

});