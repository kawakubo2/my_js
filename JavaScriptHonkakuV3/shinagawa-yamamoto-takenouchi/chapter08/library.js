document.addEventListener('DOMContentLoaded', () => {
    const bookshelf = new Bookshelf();
    let current_id = 1;
    const div_add = document.querySelector('#div-add');
    const div_search = document.querySelector('#div-search');

    const search_result = document.querySelector('#search-result');
    
    function hidden_all_div() {
        const operation_containers = document.querySelectorAll('.operation-container');
        for (const operation_container of operation_containers) {
            operation_container.style.display = 'none';
        }
    }
    document.querySelector('#add').addEventListener('click', e => {
        hidden_all_div();
        div_add.style.display = 'block';
    })
    document.querySelector('#button-add').addEventListener('click', () => {
        // バリデーションは省略
        const book = new Book(
            current_id++,
            document.querySelector('#title').value,
            document.querySelector('#publisher').value,
            document.querySelector('#published').value,
            document.querySelector('#price').value,
            true
        );
        bookshelf.add(book);
    });

    function createTd(str) {
        const td = document.createElement('td');
        const text = document.createTextNode(str);
        td.appendChild(text);
        return td;
    }
    function createTr(book) {
        const tr = document.createElement('tr');
        tr.appendChild(createTd(book.id));
        tr.appendChild(createTd(book.tile));
        tr.appendChild(createTd(book.publisher));
        tr.appendChild(createTd(book.published));
        tr.appendChild(createTd(book.exists ? '○': '×'));
        return tr;
    }
    document.querySelector('#search').addEventListener('click', () => {
        hidden_all_div();
        search_result.textContent = "";
        div_search.style.display = 'block';
        const books = bookshelf.search();
        for (const book of books) {
            search_result.append(createTr(book));            
        }
    });
});