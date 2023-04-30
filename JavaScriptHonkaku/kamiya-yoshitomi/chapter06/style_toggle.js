document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('elem').addEventListener('click', function() {
        this.className = (this.className === 'highlight' ? '' : 'highlight');
    }, false);
}, false);