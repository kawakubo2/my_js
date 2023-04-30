document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const ope = document.getElementById('ope');
    const key = document.getElementById('key');
    const val = document.getElementById('val');
    const key_div = document.getElementById('key-div');
    const val_div = document.getElementById('val-div');
    const list    = document.getElementById('list');
    const storage = localStorage;

    ope.addEventListener('change', function() {
        switch(ope.value) {
            case 'set':
                key_div.style.display = 'block';
                val_div.style.display = 'block';
                list.style.display = 'none';
                break;
            case 'get':
                key_div.style.display = 'block';
                val_div.style.display = 'none';
                list.style.display = 'none';
                break;
            case 'getAll':
                key_div.style.display = 'none';
                val_div.style.display = 'none';
                list.style.display = 'block';
                break;
            case 'remove':
                key_div.style.display = 'block';
                val_div.style.display = 'none';
                list.style.display = 'none';
                break;
            default:
                key_div.style.display = 'block';
                val_div.style.display = 'block';
                list.style.display = 'none';
                break;
        }
    });

    btn.addEventListener('click', function() {
        switch(ope.value) {
            case 'set':
                if (key.value === '') return;
                if (val.value === '') return;
                storage.setItem(key.value, val.value);
                key.value = '';
                val.value = '';
                break;
            case 'get':
                if (key.value === '') return;
                console.log(storage.getItem(key.value));
                key.value = '';
                break;
            case 'getAll':
                list.textContent = '';
                for (let i = 0, len = storage.length; i < len; i++) {
                    const key = storage.key(i);
                    const value = storage[key];
                    const li = document.createElement('li');
                    const text = document.createTextNode(`${key}:${value}`);
                    li.appendChild(text);
                    list.appendChild(li);
                }
                break;
            case 'remove':
                if (key.value === '') return;
                storage.removeItem(key.value);
                key.value = '';
                break;
        }
    });
});