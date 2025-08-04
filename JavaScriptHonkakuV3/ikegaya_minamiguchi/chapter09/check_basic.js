document.addEventListener('DOMContentLoaded', () => {
    const foods = Array.from(document.querySelectorAll('input[name="food"]'));
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(foods.filter(item => item.checked).map(item => item.value));
    });
});