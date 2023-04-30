document.addEventListener('DOMContentLoaded', function() {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let li = first.getElementsByTagName('li');
    for (let i = 0, len = li.length; i < len; i++) {
        let item = li.item(i);
        let new_li = document.createElement('li');
        let new_text = document.createTextNode(item.textContent);
        new_li.appendChild(new_text);
        second.appendChild(new_li);
    }
});