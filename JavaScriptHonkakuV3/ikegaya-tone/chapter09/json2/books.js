document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#tbody');

    function createTbodyContents(books) {
        const fragment = document.createDocumentFragment();
        for (const book of books) {
            fragment.append(createTr(book));
        }
        tbody.append(fragment);
    }

    function createTr(book) {
        const tr = document.createElement('tr');
        tr.append(createTd(book.title));
        tr.append(createTdForAuthors(book.author));
        tr.append(createTd(book.price));
        return tr;
    }

    function createTd(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }

    function createTdForAuthors(authors) {
        const td = document.createElement('td');
        const ul = document.createElement('ul');
        for (const author of authors) {
            const li = document.createElement('li');
            li.textContent = `${author.name}(${author.email})`;
            ul.append(li);
        }
        td.append(ul);
        return td;
    }

    fetch('./books.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data.books);
            createTbodyContents(data.books);
        });
});