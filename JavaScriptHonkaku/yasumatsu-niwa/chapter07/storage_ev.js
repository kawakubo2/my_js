const storage = localStorage;
window.addEventListener('storage', event => {

    const result = document.getElementById('result');

    const create_td = str => {
        const td = document.createElement('td');
        if (str) {
            const text = document.createTextNode(str);
            td.appendChild(text);
        }
        return td;
    }

    const create_tr = (key, value, event) => {
        const tr = document.createElement('tr');

        const keyTd = create_td(key);
        // oldValueとnewValueをリアルタイムで監視できない
        const oldValueTd = create_td(key == event.key ? event.oldValue : value);
        const newValueTd = create_td(key == event.key ? event.newValue : value);
        const urlTd = create_td(key == event.key ? event.url: '');

        tr.appendChild(keyTd);
        tr.appendChild(oldValueTd);
        tr.appendChild(newValueTd);
        tr.appendChild(urlTd);

        return tr;
    };
    
    result.textContent = '';
    for (let i = 0, len = storage.length; i < len; i++) {
        const k = storage.key(i);
        if (k.startsWith('pb_')) continue;
        const v = storage[k];
        const tr = create_tr(k, v, event);   
        result.appendChild(tr);
    }
}, false);