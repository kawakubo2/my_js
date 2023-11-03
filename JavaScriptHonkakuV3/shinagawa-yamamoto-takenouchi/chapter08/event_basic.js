document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('#cover');
    pic.addEventListener('mouseenter', (e) => {
        e.target.src = 'images/open_home.gif';
    }, false);
    pic.addEventListener('mouseleave', (e) => {
        e.target.src = 'images/home.gif';
    }, false);
}, false);