/*
<select name="fruits" id="fruits">
    <option value="banana">バナナ</option>
    <option value="apple">林檎</option>
    <option value="grape">葡萄</option>
    <option value="orange">オレンジ</option>
    <option value="strawberry">苺</option>
</select>
*/
const fruits = { banana: "バナナ", apple: "林檎", grape: "葡萄", 
                orange: "オレンジ", strawberry: "苺"};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#fm');
    const select = document.createElement('select');
    select.name = 'fruits';
    select.id = 'fruits';
    for (const key in fruits) {
        const value = fruits[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        select.append(option);
    }
    form.append(select);
});