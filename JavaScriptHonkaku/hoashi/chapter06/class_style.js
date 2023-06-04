document.addEventListener('DOMContentLoaded', () => {
    /*
    const divs = document.querySelectorAll('#fm > div');
    for (const div of divs) {
        div.className = 'container';
    };
    */
    Array.from(document.querySelectorAll('#fm > div')).forEach(d => d.className = 'container');
});