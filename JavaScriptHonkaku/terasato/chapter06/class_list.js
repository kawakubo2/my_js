document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById('elem');
    elem.addEventListener('click', function() {
        this.classList.toggle('highlight');
    });
});