document.addEventListener('DOMContentLoaded', () => {
    let main = document.getElementById('main');
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', () => {
        let li = document.createElement('li');
        let button = document.createElement('input');
        button.type = 'button';
        button.value = '△';
        let text = document.createTextNode(document.getElementById('title').value);
        li.appendChild(text);
        li.appendChild(button);
        main.appendChild(li);
    });

    main.addEventListener('click', (e) => {
        let t = e.target;
        let buttonName = t.value;
        if (buttonName === '△') {
            let currentLi = t.parentNode;
            let nextLi = currentLi.previousElementSibling;
            if (nextLi) {
                main.insertBefore(currentLi, nextLi);
            }
        };
    });
});