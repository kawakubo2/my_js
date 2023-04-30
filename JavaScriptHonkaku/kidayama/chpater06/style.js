document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    elem.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'Yellow';
    });
    elem.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = '';
    });
});