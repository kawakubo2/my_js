document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#main');
    main.addEventListener('click', (e) => {
        e.target.parentNode.style.backgroundColor = e.target.dataset.description;
    });
});