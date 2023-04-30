document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    elem.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'yellow';
    });
    elem.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});