document.addEventListener('DOMContentLoaded', () => {

    const bookshelf = new Bookshelf();
    hiddenAll();

    const menu = document.querySelector('#menu');
    const addForm = document.querySelector('#add-form');
    const searchForm = document.querySelector('#search-form');

    const addBookButton = document.querySelector('#add-book');
    addBookButton.addEventListener('click', () => {
        const title = document.querySelector('#title').value;
        const price = document.querySelector('#price').value;
        const publisher = document.querySelector('#publisher').value;
        const published = document.querySelector('#published').value;
        const book = new Book(title, price, publisher, published, false);
        bookshelf.add(book);
    });

    const searchButton = document.querySelector('#search_button');
    searchButton.addEventListener('click', () => {
        const books = bookshelf.search()
        for (const book of books) {
            console.log(book);
        }
    });

    function hiddenAll() {
        const libraryForms = document.querySelectorAll('.library-form');
        for (const libraryForm of libraryForms) {
            libraryForm.style.display = 'none';
        }
    }

    function addBook() {
        hiddenAll();
        addForm.style.display = 'block';
    }

    function searchBooksByTitle() {
        hiddenAll();
        searchForm.style.display = 'block';
    }

    menu.addEventListener('change', (e) => {
        const menuItem = e.target.value;
        switch(menuItem) {
            case 'rental':
                break;
            case 'returns':
                break;
            case 'search':
                searchBooksByTitle();
            case 'add':
                addBook();
                break;
            case 'remove':
                removeBook();
                break;                
        }
    });
});