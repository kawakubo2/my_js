document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#parent');
    let num = 2;
    parent.addEventListener('click', (e) => {
        console.log(e.target.value);
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.value = 'Add' + num++;
        btn.dataset.add = 1;
        parent.append(btn);
    });
});