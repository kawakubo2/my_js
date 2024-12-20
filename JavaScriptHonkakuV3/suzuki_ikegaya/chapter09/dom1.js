document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('div');
    for (const div of divs) {
        div.style.border = '1px solid red';
        div.style.margin = '1rem';
    }
});