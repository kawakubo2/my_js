document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    elem.addEventListener('mouseenter', () => {
        elem.style.backgroundColor = 'yellow';
    });
    elem.addEventListener('mouseleave', () => {
        elem.style.backgroundColor = '';
    });
});