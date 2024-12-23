document.addEventListener('DOMContentLoaded', () => {
    const bloodTypes = ['A', 'B', 'AB', 'O'];
    const div = document.querySelector('#blood2');
    const h4 = document.createElement('h4');
    h4.textContent = '血液型は?';
    div.append(h4);
    for (const blood of bloodTypes) {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'blood2';
        radio.value = blood;
        const text = document.createTextNode(blood + '型 ');
        label.append(radio);
        label.append(text);
        div.append(label);
    }
});