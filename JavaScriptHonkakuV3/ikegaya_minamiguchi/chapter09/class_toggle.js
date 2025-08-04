document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    const highlight = () => {
        elem.classList.toggle('highlight');
    };
    elem.addEventListener('mouseenter', highlight, false); 
    elem.addEventListener('mouseleave', highlight, false); 
});