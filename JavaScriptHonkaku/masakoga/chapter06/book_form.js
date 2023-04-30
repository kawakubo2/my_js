const create_td = (elem) => {
    let td = document.createElement('td');
    let text = document.createTextNode(elem.value);
    td.appendChild(text);
    return td;
}
const create_td_with_button = (value) => {
    let td = document.createElement('td');
    let button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    td.appendChild(button);
    return td;
}
const create_tr = (...tds) => {
    let tr = document.createElement('tr');
    for (let td of tds) {
        tr.appendChild(td);
    }
    return tr;
}

document.addEventListener('DOMContentLoaded', function() {
    let tbody = document.getElementById('tbody');
    document.getElementById('btn').addEventListener('click', function(e) {
        let title = document.getElementById('title');
        let publisher = document.getElementById('publisher');
        let price = document.getElementById('price');
        if (title.value === '' || publisher.value === '' || price.value === '') {
            return;
        }
        let title_td = create_td(title);
        let publisher_td = create_td(publisher);
        let price_td = create_td(price);

        let removed_td = create_td_with_button('削除');
        let up_td = create_td_with_button('△');
        let down_td = create_td_with_button('▽');

        let tr = create_tr(title_td, publisher_td, price_td, removed_td, up_td, down_td);
        tbody.appendChild(tr);
        e.preventDefault();

        title.value = '';
        publisher.value = '';
        price.value = '';
        title.focus();
    });
    const up_tr = (elem) => {
        let tr = elem.parentNode.parentNode;
        let prev_tr = tr.previousElementSibling;
        let removed_tr = null;
        if (prev_tr) {
            // removed_tr = tbody.removeChild(tr);
            tbody.insertBefore(tr, prev_tr);
        }
    };
    const down_tr = (elem) => {
        let tr = elem.parentNode.parentNode;
        let next_tr = tr.nextElementSibling;
        let removed_tr = null;
        if (next_tr) {
            let next_next_tr = next_tr.nextElementSibling;
            // removed_tr = tbody.removeChild(tr);
            tbody.insertBefore(tr, next_next_tr);
        }
    };
    const remove_tr = (elem) => {
        let tr = elem.parentNode.parentNode;
        tbody.removeChild(tr);
    }


    tbody.addEventListener('click', (e) => {
        if (e.target.value === '△') {
            up_tr(e.target);
        } else if (e.target.value === '▽') {
            down_tr(e.target);
        } else if (e.target.value === '削除') {
            remove_tr(e.target);
        }
    });
});