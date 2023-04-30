document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('elem').addEventListener('click', function() {
        /*
        if (this.classList.contains('highlight')) {
            this.classList.remove('highlight');
        } else {
            this.classList.add('highlight');
        }
        */
       this.classList.toggle('highlight');
    }, false);
}, false);