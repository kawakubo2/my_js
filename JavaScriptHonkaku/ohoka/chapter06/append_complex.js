document.addEventListener('DOMContentLoaded', function() {
    let books = [
        { title: '独習PHP第3版', price: 3200 },
        { title: 'Javaポケットリファレンス', price: 2680 },
        { title: 'アプリを作ろう！Android入門', price: 2000 },
    ];
    let frag = document.createDocumentFragment();

    for (let i = 0, len = books.length; i < len; i++) {
        let b = books[i];
        let li = document.createElement('li');
        let text = document.createTextNode(`${b.title}:${b.price}円`);
        li.appendChild(text);
        frag.appendChild(li);
    }
    document.getElementById('list').appendChild(frag);
});