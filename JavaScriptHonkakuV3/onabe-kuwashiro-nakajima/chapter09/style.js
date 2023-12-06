document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    elem.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'Yellow';
        e.target.style.border = '3px solid blue';
        e.target.style.borderRadius = '0.5rem';
        e.target.style.boxShadow = '5px 5px 5px #888';
    });
    elem.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = '';
        e.target.style.border = '';
        e.target.style.borderRadius = '';
        e.target.style.boxShadow = '';
    });
});