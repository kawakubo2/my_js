document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    elem.addEventListener('click', event => {
        event.target.className = (event.target.className === 'hilight' ? '': 'hilight');
    });
})