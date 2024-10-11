document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#parent');
    const buttons = document.querySelector('.add'); // class="add"

    parent.addEventListener('click', () => {
        const b = document.createElement('button');
        b.className = 'add';
        b.textContent = '追加';
        parent.append(b);
    });
});