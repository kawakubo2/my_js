document.addEventListener('DOMContentLoaded', () => {
    const my_alert = () => alert('クリックされました。');
    const set_style = event => event.target.style.backgroundColor = 'yellow';
    
    document.getElementById('elem').addEventListener('click', my_alert);
    document.getElementById('elem').addEventListener('click', set_style);

    document.getElementById('btn').addEventListener('click', event => {
        document.getElementById('elem').removeEventListener('click', my_alert);
    });
});