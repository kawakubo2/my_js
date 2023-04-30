document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        const name = document.getElementById('name');
        const url = document.getElementById('url');

        const anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.target = '_blank';
        const text = document.createTextNode(name.value);
        anchor.appendChild(text);

        const br = document.createElement('br');

        const list = document.getElementById('list');
        list.appendChild(anchor);
        list.appendChild(br);

        name.value = '';
        url.value = '';
        name.focus();
    });
});