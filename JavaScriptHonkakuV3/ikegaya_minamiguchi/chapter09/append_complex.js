document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: 'ゼロからわかるTypeScript入門', price: 2948 },
        { title: 'Bootstrap 5の教科書', price: 3828 },
        { title: 'はじめてのAndroidアプリ開発', price: 3520 },
    ];
    const frag = document.createDocumentFragment();
    const list = document.querySelector('#list');
    for (const book of books) {
        const li = document.createElement('li');
        li.textContent = `${book.title}: ${book.price}円`;
        frag.append(li);
    }
    list.append(freg);
});