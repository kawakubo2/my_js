const books = [
    { title: 'ゼロからわかるTypeScript入門', price: 2948 },
    { title: 'Bootstrap 5の教科書', price: 3828 },
    { title: 'はじめてのAndoridアプリ開発', price: 3520 }
];

document.addEventListener('DOMContentLoaded', () => {
    const frag = document.createDocumentFragment();
    for (const book of books) {
        const li = document.createElement('li');
        li.textContent = `${book.title}: ${book.title}円`;
        frag.append(li);
    }
    document.querySelector('#list').append(frag)
});