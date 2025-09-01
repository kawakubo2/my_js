document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#parent');
    const child = document.querySelector('input[data-add="1"]');
    let num = 2;
    function create_add_btn(e) {
        console.log(e.target.value);
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.value = 'Add' + num++;
        btn.dataset.add = 1;
        btn.addEventListener('click', (ev) => {
            parent.append(create_add_btn(ev));
        });
        return btn;
    }
    child.addEventListener('click', (e) => {
        const btn = create_add_btn(e);
        parent.append(btn);
    });
});