document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function createTbody(books) {
        const tbody = document.querySelector('#tbody');
        const fragment = document.createDocumentFragment();
        for (const book of books) {
            fragment.append(createTr(book));
        }
        tbody.append(fragment);
    }

    function createTr(book) {
        const tr = document.createElement('tr');
        tr.append(createTd(book.title));
        const authorTd = document.createElement('td');
        const ul = document.createElement('ul');
        for (const a of book.author) {
            const li = document.createElement('li');
            li.textContent = `${a.name} ${a.email}`;
            ul.append(li);
        }
        authorTd.append(ul);
        tr.append(authorTd);
        tr.append(createTd(book.price));
        return tr;
    }

    function createTd(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }

    fetch('./books.json')
        .then(resp => resp.json())
        .then(jsonData => createTbody(jsonData.books));

    fetch('./booksconfig.json')
        .then(resp => resp.json())
        .then(data => {
            const theme = data.theme;
            if (theme === 'light') {
                body.style = {
                    backgroundColor: 'white',
                    color: '#666',
                    fontFmily: 'sans-serif'
                };
            } else {
                body.style = {
                    backgroundColor: '#333',
                    color: 'while',
                    fontFmily: 'serif'
                };
            }
            const fontFmily = data['font-family'];
            if (fontFmily === 'sans-serif') {
                body.style.fontFamily = 'sans-serif';
            } else {
                body.style.fontFamily = 'serif';
            }
        })
});
