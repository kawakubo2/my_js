document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const url = document.querySelector('#url');
    const list = document.querySelector('#list');
    const form = document.querySelector('#fm');

    document.querySelector('#btn').addEventListener('click', () => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.textContent = title.value;
        anchor.target = '_blank';

        li.append(anchor);
        list.append(li);

        form.reset();
        title.focus();
    });
});