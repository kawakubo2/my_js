document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        const name = document.getElementById('name');
        console.log(name.value);
    });
});