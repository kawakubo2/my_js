/*
<label><input type="radio" name="fruits" value="banana">バナナ</label>
<label><input type="radio" name="fruits" value="apple">林檎</label>
<label><input type="radio" name="fruits" value="grape">葡萄</label>
<label><input type="radio" name="fruits" value="orange">オレンジ</label>
<label><input type="radio" name="fruits" value="strawberry">苺</label>
*/
const fruits = { banana: "バナナ", apple: "林檎", grape: "葡萄", 
                orange: "オレンジ", strawberry: "苺"};
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#fm');
    for (const key in fruits) {
        const value = fruits[key];
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'fruits';
        radio.value = key;
        label.append(radio);
        const text = document.createTextNode(value);
        label.append(text);
        form.append(label);
    }
});
