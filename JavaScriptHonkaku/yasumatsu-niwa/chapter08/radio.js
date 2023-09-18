/*
<div id="result">
    <label><input type="radio" name="fruit" value="orage" />オレンジ</label>
    <label><input type="radio" name="fruit" value="apple" />リンゴ</label>
    <label><input type="radio" name="fruit" value="banana" />バナナ</label>
    <label><input type="radio" name="fruit" value="pear" />ナシ</label>
    <label><input type="radio" name="fruit" value="watermelon" />スイカ</label>
</div>
*/
const fruits = {orange: 'オレンジ', apple: 'リンゴ', banana: 'バナナ',
                pear: 'ナシ', watermelon: 'スイカ'};
document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    for (const f_en in fruits) {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'fruit';
        radio.value = f_en;
        const text = document.createTextNode(fruits[f_en]);
        label.appendChild(radio);
        label.appendChild(text);
        result.appendChild(label);
    }
});