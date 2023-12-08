const fruits = {banana: "バナナ", apple: "リンゴ", strawberry: "苺", grape: "葡萄", pear: "梨"};
/*
<form id="result">
    <div>
        <label><input type="radio" name="fruit" value="banana" />バナナ</label>
        <label><input type="radio" name="fruit" value="apple" />リンゴ</label>
        <label><input type="radio" name="fruit" value="strawberry" />苺</label>
        <label><input type="radio" name="fruit" value="grape" />葡萄</label>
        <label><input type="radio" name="fruit" value="pear" />梨</label>
    </div>
</form>
*/
function createRadioButton(name, value) {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.value = value;
    return input;
}


document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    const div = document.createElement('div');
    for (const fruit_en in fruits) {
        const fruit_ja = fruits[fruit_en];
        const label = document.createElement('label');
        const input = createRadioButton('fruit', fruit_en);
        const text = document.createTextNode(fruit_ja);
        label.appendChild(input);
        label.appendChild(text);
        div.appendChild(label);
    }
    result.appendChild(div);
});