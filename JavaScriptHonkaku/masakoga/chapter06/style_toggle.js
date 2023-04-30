document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');

    elem.addEventListener('click', function() {
        this.className = (this.className === 'highlight' ? '' : 'highlight');
    }, false);
}, false);