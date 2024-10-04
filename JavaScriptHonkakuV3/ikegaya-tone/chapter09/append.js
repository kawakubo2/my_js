document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const url   = document.querySelector('#url');
    const list  = document.querySelector('#list');
    const fm    = document.querySelector('#fm');

    document.querySelector('#btn').addEventListener('click', () => {
        const li  = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.target = '_blank';
        anchor.textContent = title.value;
        li.append(anchor);
        list.append(li);

        fm.reset();
        title.focus();
    });
});