document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#main');
    const result = document.querySelector('#result');
    function setBackgroundColor(e) {
        result.style.backgroundColor = e.target.dataset.description;
        // result.style.backgroundColor = e.target.value;
    }
    main.addEventListener('click', setBackgroundColor);
});