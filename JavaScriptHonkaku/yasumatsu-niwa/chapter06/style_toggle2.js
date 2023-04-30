document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');
    elem.addEventListener('click', event => {
        const classes = event.target.className.split(' ');
        const index = classes.indexOf('hilight');
        if (index === -1) {
            classes.push('hilight');
        } else {
            classes.splice(index, 1);
        }
        event.target.className = classes.join(' ');
    });
});