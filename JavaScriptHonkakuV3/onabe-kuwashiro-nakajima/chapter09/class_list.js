document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    elem.addEventListener('mouseenter', (e) => {
        e.target.classList.add('hilight');
    });
    elem.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('hilight');
    });
});