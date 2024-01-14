document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#key').addEventListener('keydown', (e) => {
        console.log(`キー値: ${e.key}`)
    });
});