document.addEventListener('DOMContentLoaded', () => {
    const food = document.querySelector('#food');
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(food.value);
    });
});