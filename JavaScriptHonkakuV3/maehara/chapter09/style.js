document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('#elem');
    elem.addEventListener('mouseenter', (e) => {
        e.target.style.padding = '0.3em';
        e.target.style.borderRadius = '0.5em';
        e.target.style.backgroundColor = 'navy';
        e.target.style.textAlign = 'center';
        e.target.style.color = 'white';
        e.target.style.border = '2px solid red';
        e.target.style.boxShadow = '5px 5px 5px #777';
    });
    elem.addEventListener('mouseleave', (e) => {
        e.target.style = {};
    })
});