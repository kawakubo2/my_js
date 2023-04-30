document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: '独習PHP 第3版', price: 3200 },
        { title: 'Javaポケットリファレンス', price: 2000 },
        { title: 'アプリを作ろう！Android入門', price: 2000}
    ];

    const list = document.getElementById('list');

    const frag = document.createDocumentFragment();
    for (const book of books) {
        const li = document.createElement('li');
        const text = document.createTextNode(book.title + ':' + book.price + '円');
        li.appendChild(text);
        frag.appendChild(li);
    }
    list.appendChild(frag);
});