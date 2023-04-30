document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        const name = document.getElementById('name');
        const url = document.getElementById('url');

        const anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.target = '_blank';
        const text = document.createTextNode(name.value);
        anchor.append(text);
        const br = document.createElement('br');
        const list = document.getElementById('list');
        list.appendChild(anchor);
        list.appendChild(br);
    });
});