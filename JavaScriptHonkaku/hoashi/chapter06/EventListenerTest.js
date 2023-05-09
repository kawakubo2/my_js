document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('abc');
    const set_blue = event => {
        event.target.style.backgroundColor = 'blue';
    };
    div.addEventListener('click', set_blue);
    div.addEventListener('click', event => {
        event.target.style.border = '5px solid red';
    });
    const my_console = event => {
        console.log('クリックされた!');
    };
    div.addEventListener('click', my_console);
    document.getElementById('remove_blue').addEventListener('click', event => {
        div.removeEventListener('click', my_console);
    });
})