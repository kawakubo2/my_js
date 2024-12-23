document.addEventListener('DOMContentLoaded', () => {
    const fruits = {
        banana: 'バナナ',
        apple: 'リンゴ',
        orange: 'オレンジ',
        grape: 'ブドウ',
        pear: 'ナシ'
    };
    const select = document.querySelector('#fruit2');
    select.name = 'fruit2';
    select.id = 'fruit2';
    for (const en_name in fruits) {
        const option = document.createElement('option');
        option.value = en_name;
        option.textContent = fruits[en_name];
        select.append(option);
    }
});