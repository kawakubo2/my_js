document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    elem.addEventListener('mouseenter', () => {
        elem.classList.add('highlight');
    });
    elem.addEventListener('mouseleave', () => {
        elem.classList.remove('highlight');
    });
});