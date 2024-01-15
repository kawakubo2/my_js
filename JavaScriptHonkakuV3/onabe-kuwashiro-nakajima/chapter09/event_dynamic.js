document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#parent');
    let n = 1;
    parent.addEventListener('click', (e) => {
        console.log(e.target.dataset.add);
        if (e.target.dataset.add) {
            const btn = document.createElement('input');
            btn.type = 'button';
            btn.value = 'Add';
            btn.dataset.add = ++n;
            parent.append(btn);
        }
    }, false);
});