document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    elem.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'Yellow';
    });
    elem.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    }, false);
}, false);