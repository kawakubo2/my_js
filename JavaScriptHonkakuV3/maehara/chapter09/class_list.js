document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    elem.addEventListener('mouseenter', (e) => {
        elem.classList.add('highlight');
    });
    elem.addEventListener('mouseleave', (e) => {
        elem.classList.remove('highlight');
    })
});