document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('elem').addEventListener('click', event => {
        // event.target.classList.toggle('hilight');
        if (event.target.classList.contains('hilight')) {
            event.target.classList.remove('hilight');
        } else {
            event.target.classList.add('hilight');
        }
    });
});