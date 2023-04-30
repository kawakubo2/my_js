document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');

    elem.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'Yellow';
        this.style.border = '3px solid Blue';
    }, false);
    elem.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.border = '';
    }, false);
}, false);