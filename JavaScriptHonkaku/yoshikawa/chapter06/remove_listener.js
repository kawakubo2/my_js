document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('target');
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'yellow';
    });
    const display_coord = event => {
        div.textContent = `(${event.clientX}, ${event.clientY})`;
    }
    div.addEventListener('click', display_coord);
    document.getElementById('btn').addEventListener('click', () => {
        div.removeEventListener('click',display_coord);
    });
});