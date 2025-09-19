document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const books = document.querySelector('#bookshelf');

    function create_tr() {
        const tr = document.createElement('tr');
        tr.appendChild(create_td(title.value));
        tr.appendChild(create_td(publisher.value));
        tr.appendChild(create_td(price.value));
        return tr;
    }
    function create_td(value) {
        const td = document.createElement('td');
        td.textContent = value;
        return td;
    }

    document.querySelector('#bookshelf').addEventListener('click', () => {
        // TODO バリデーション
        const tr = create_tr();
        books.appendChild(tr);
    });
});