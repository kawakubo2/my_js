document.addEventListener('DOMContentLoaded', function() {
    let elem = document.getElementById('elem');
    elem.addEventListener('click', function() {
        this.classList.toggle('highlight');
    });
});