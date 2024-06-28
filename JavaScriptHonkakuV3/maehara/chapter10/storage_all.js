document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#tbody');

    const storage = localStorage;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < storage.length; i++) {
        const tr = document.createElement('tr');
        const key = storage.key(i);
        const value = storage.getItem(key);
        const keyTd = document.createElement('td');
        keyTd.textContent = key;
        const valueTd = document.createElement('td');
        valueTd.textContent = value;
        tr.append(keyTd);
        tr.append(valueTd);
        frag.append(tr);
    }
    tbody.append(frag);
})