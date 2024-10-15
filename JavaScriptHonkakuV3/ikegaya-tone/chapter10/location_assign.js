document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        window.frames[0].location.href = 'https://haru-idea.jp';
    });
});