document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#parent');
    parent.addEventListener('click', (e) => {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.value = 'Add';
        btn.dataset.add = "1";
        parent.append(btn);
    }, false);
})