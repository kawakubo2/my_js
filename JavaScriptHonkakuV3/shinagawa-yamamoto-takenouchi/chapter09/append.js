document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const url = document.querySelector('#url');
    const list = document.querySelector('#list')
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.target = '_blank';
        const text = document.createTextNode(title.value);
        anchor.appendChild(text);
        li.appendChild(anchor);
        list.appendChild(li);
    });
});