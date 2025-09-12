document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const books = document.querySelector('#bookshelf');

    document.querySelector('#bookshelf').addEventListener('click', () => {
        // TODO バリデーション
        const td_title = document.createElement('td');
        td_title.textContent = title.value;
        const td_publisher = document.createElement('td');
        td_publisher.textContent = publisher.value;
        const td_price = document.createElement('td');
        td_price.textContent = price.value; 

        const tr = document.createElement('tr');
        tr.appendChild(td_title);
        tr.appendChild(td_publisher);
        tr.appendChild(td_price);

        books.appendChild(tr);
    });
});