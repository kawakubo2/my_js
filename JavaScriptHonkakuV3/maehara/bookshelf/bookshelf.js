document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#bookshelf-body');
    const add_button = document.querySelector('#add-button');
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');

    function create_td(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }
    
    add_button.addEventListener('click', () => {
        const tr = document.createElement('tr');

        tr.append(create_td(title.value));
        tr.append(create_td(publisher.value));
        tr.append(create_td(price.value));

        tbody.append(tr);
    });
});