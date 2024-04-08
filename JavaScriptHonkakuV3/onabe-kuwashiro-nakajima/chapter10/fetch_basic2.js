document.addEventListener('DOMContentLoaded', () => {
    const books_body = document.querySelector('#books-body');

    function create_books_body(books) {
        for (const book of books) {
            const tr = create_tr(book);
            books_body.append(tr);
        }
    }

    function create_tr(book) {
        const tr = document.createElement('tr');
        tr.append(create_td(book.title));
        tr.append(create_td(book.price));
        tr.append(create_td(book.publisher));
        return tr;
    }

    function create_td(property) {
        const td = document.createElement('td');
        // const text = document.createTextNode(property);
        // td.append(text);
        td.textContent = property;
        return td;
    }

    fetch('books.json')
        .then(res => res.json())
        .then(data => {
            const books = data.books;
            create_books_body(books);
        });
});
