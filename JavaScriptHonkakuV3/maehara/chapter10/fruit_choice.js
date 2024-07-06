document.addEventListener('DOMContentLoaded', () => {
    const fruits = {banana: 'バナナ', apple: 'リンゴ', grape: 'ブドウ', orange: 'オレンジ', strawberry: 'イチゴ'};
    
    const myform = document.querySelector('#myform');
    
    const div_radio = document.createElement('div');
    for (const en_name in fruits) {
        const ja_name = fruits[en_name];
        const label = document.createElement('label');
        const radio = document.createElement('input')
        radio.type = 'radio';
        radio.name = 'fruit';
        radio.value = en_name;
        const text = document.createTextNode(ja_name);
        label.append(radio);
        label.append(text);
        div_radio.append(label);
    }
    myform.append(div_radio);
    // チェックボックス
    const div_checkbox = document.createElement('div');
    for (const en_name in fruits) {
        const ja_name = fruits[en_name];
        const label = document.createElement('label');
        const radio = document.createElement('input')
        radio.type = 'checkbox';
        radio.name = 'fruit';
        radio.value = en_name;
        const text = document.createTextNode(ja_name);
        label.append(radio);
        label.append(text);
        div_checkbox.append(label);
    }
    myform.append(div_checkbox);
});
