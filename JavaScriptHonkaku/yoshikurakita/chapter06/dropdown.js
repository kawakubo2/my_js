document.addEventListener('DOMContentLoaded', () => {
    const foods = { banana: 'バナナ', apple: 'リンゴ'
                    , grape: 'ブドウ', 'strawberry': 'イチゴ'}
    const menu = document.getElementById('food');
    for (const food_en in foods) {
        const option = document.createElement('option');
        option.value = food_en;
        const text = document.createTextNode(foods[food_en]);
        option.appendChild(text);
        menu.appendChild(option);
    }
}, false);