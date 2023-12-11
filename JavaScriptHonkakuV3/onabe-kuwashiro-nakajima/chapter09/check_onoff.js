document.addEventListener('DOMContentLoaded', () => {
    const subscribe = document.querySelector('#subscribe');
    const email = document.querySelector('#email');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(subscribe.checked);
        if (subscribe.checked) {
        } else {
            console.log('チェックされていません。');
        }
    });
    subscribe.addEventListener('click', (e) => {
        document.querySelector('#email-field').style.display = subscribe.checked ? 'block': 'none';
    })
});