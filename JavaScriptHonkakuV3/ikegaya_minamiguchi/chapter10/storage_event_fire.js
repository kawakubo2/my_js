document.addEventListener('DOMContentLoaded', () => {
    const storage = localStorage;
    const key = document.querySelector('#key');
    const value = document.querySelector('#value');

    document.querySelector('#update').addEventListener('click', () => {
        storage.setItem(key.value, value.value);
    })
    document.querySelector('#delete').addEventListener('click', () => {
        storage.removeItem(key.value);
    });
})