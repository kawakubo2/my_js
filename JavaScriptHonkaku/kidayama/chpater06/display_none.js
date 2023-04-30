document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById('elem');
    const toggle = document.getElementById('toggle');

    elem.style.display = 'block';

    toggle.addEventListener('click', function() {
        if (elem.style.display === 'block') {
            elem.style.display = 'none';
        } else {
            elem.style.display = 'block';
        }
    });
});