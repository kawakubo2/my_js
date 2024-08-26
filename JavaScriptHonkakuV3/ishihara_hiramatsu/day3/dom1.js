const fruits = {banana: "バナナ", apple: "リンゴ", orange: "オレンジ", grape: "ブドウ"};

const div = document.querySelector('#fruits');

for (const fruit_en in fruits) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'fruit';
    input.value = fruit_en;
    label.textContent = fruits[fruit_en];
    label.prepend(input);
    div.append(label);
}