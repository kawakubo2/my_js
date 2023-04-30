document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    elem.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow';
    });
    elem.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = '';
    });
});