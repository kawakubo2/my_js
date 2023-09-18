/*
<ul>
    <li>バナナ</li>
    <li>リンゴ</li>
    <li>ナシ</li>
    <li>ブドウ</li>
    <li>イチゴ</li>
</ul>
*/
const fruits = ['バナナ', 'リンゴ', 'ナシ', 'ブドウ', 'イチゴ'];
document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const ul = document.createElement('ul');
    for (const fruit of fruits) {
        const li = document.createElement('li');
        const text = document.createTextNode(fruit);
        li.appendChild(text);
        ul.appendChild(li);
    }
    result.appendChild(ul);
});
