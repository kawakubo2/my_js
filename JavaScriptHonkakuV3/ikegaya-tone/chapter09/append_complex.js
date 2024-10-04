document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: 'セロからわかるTypeScript入門', price: 2948},
        { title: 'Bootstrap 5の教科書', price: 3828},
        { title: 'はじめてのAndroidアプリ開発', price: 3520}
    ];

    const list = document.querySelector('#list');
    const frag = document.createDocumentFragment();
    for (const book of books) {
        const li = document.createElement('li');
        li.textContent = `${book.title}: ${book.price}円`;
        frag.append(li);
    }
    list.append(frag);
});