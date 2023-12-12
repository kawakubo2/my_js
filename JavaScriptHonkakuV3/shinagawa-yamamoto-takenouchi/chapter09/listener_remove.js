document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('#result');
    const remove = document.querySelector('#delete');
    const printConsole = () => {
        console.log('div要素がクリックされました。')
    }
    div.addEventListener('click', () => {
        div.style.border = '1px solid blue';
    });
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'yellow';
    });
    div.addEventListener('click', printConsole);
    remove.addEventListener('click', () => {
        div.removeEventListener('click', printConsole);
    })
});