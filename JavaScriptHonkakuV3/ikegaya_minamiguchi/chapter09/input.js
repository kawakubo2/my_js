document.addEventListener('DOMContentLoaded', () => {
    const key = document.querySelector('#key');
    const remain = document.querySelector('#remain');
    key.addEventListener('input', (e) => {
        const length = [...e.target.value].length;
        remain.textContent = 100 - length;
    })
});