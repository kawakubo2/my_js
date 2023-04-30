document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    elem.addEventListener('mouseover', event => {
        event.target.className = 'hilight';
    });
    elem.addEventListener('mouseout', event => {
        event.target.className = '';
    });
})