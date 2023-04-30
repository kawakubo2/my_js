document.addEventListener('DOMContentLoaded', () => {
    const second = document.getElementById('second');
    const li = document.getElementsByTagName('li')
    // NG for (let i = 0; i < li.length; i++) {
    for (let i = 0, len = li.length; i < len ; i++) {
        const item = li.item(i);
        const new_li = document.createElement('li');
        const new_text = document.createTextNode(item.textContent);
        new_li.appendChild(new_text);
        second.appendChild(new_li);
    }
});