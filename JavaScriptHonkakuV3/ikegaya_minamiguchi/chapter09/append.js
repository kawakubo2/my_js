document.addEventListener('DOMContentLoaded', () => {
    const fm = document.querySelector('#fm');
    const title = document.querySelector('#title');
    const url = document.querySelector('#url');
    const btn = document.querySelector('#btn');
    const list = document.querySelector('#list');

    btn.addEventListener('click', () => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url.value;
        a.textContent = title.value;
        a.target = '_blank';
        li.appendChild(a);
        list.append(li);

        fm.reset();
        title.focus();
    });

});