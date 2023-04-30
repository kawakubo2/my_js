document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('elem').addEventListener('click', function() {
        const classes = this.className.split(' ');
        const index = classes.indexOf('highlight');
        if (index === -1) {
            classes.push('highlight');
        } else {
            classes.splice(index, 1);
        }
        this.className = classes.join(' ');
    }, false);
}, false);