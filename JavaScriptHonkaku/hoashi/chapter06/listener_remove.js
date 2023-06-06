document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const body = document.querySelector('body');
    const listener1 = () => window.alert('こんにちは、世界！');
    const listener2 = () => {
        body.classList.toggle('highlight');
    };
    const listener3 = () => {
        body.classList.toggle('line');
    }

    btn.addEventListener('click', listener1, false);
    btn.addEventListener('click', listener2, false);
    btn.addEventListener('click', listener3, false);
    document.getElementById('remove').addEventListener('click', () => {
        btn.removeEventListener('click', listener1, false);
    });
});