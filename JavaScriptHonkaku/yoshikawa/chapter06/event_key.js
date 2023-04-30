document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('key').addEventListener('keydown', e => {
        console.log(e.key);
    });
})