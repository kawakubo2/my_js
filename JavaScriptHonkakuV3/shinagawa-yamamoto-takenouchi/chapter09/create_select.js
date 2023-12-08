const fruits = {banana: "バナナ", apple: "リンゴ", strawberry: "苺", grape: "葡萄", pear: "梨"};
/*
<form id="result">
    <select name="fruits" id="fruits">
        <option value="banana">バナナ</option>
        <option value="apple">リンゴ</option>
        <option value="strawberry">苺</option>
        <option value="grape">葡萄</option>
        <option value="pear">梨</option>
    </select>
</form>
*/
document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    const select = document.createElement('select');
    select.name = 'fruits'; // select.setAttribute('name', 'fruits');
    select.id = 'fruits';
    for (const fruit_en in fruits) {
        const fruit_ja = fruits[fruit_en];
        const option = document.createElement('option');
        option.value = fruit_en;
        const text = document.createTextNode(fruit_ja);
        option.appendChild(text);
        select.append(option);
    }
    result.appendChild(select);
})
