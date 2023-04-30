document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: '独習PHP第3版', price: 3200 },
        { title: 'Javaポケットリファレンス', price: 2680 },
        { title: 'アプリを作ろう！Android入門', price: 2000 },
    ];

    const frag = document.createDocumentFragment();

    for (let i = 0, len = books.length; i < len; i++) {
        const book = books[i];
        const li = document.createElement('li');
        const text = document.createTextNode(book.title + ':' + book.price + '円');
        li.appendChild(text);
        frag.appendChild(li);
    }
    
    document.getElementById('list').appendChild(frag);
});