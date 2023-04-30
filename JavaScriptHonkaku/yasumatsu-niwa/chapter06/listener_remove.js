document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');
    const remove_btn = document.getElementById('remove');

    elem.addEventListener('click', event => {
        event.target.classList.toggle('hilight');
    });

    let pop_alert =  function() {
        alert('こんにちは！');
    } 
    elem.addEventListener('click', pop_alert);

    remove_btn.addEventListener('click', event => {
        elem.removeEventListener('click', pop_alert);
        event.preventDefault();
    });
})