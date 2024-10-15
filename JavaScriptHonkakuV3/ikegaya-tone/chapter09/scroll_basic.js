document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#main').addEventListener('click', () => {
        window.scrollBy(0, window.innerHeight);
    });
});