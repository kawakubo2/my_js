document.addEventListener('DOMContentLoaded', () => {
    const hex = document.querySelector('#hex');
    hex.addEventListener('keydown', (e) => {
        if (!(e.key >= '0' && e.key <= '9' || e.key >= 'a' && e.key <= 'f' || e.key === 'Backspace')) e.preventDefault();
        // if (e.type === 'Process') e.preventDefault();
        console.log(e.key);
    });
});