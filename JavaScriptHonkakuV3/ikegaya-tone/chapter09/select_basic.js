document.addEventListener('DOMContentLoaded', () => {
    const food = document.querySelector('#food');
    document.querySelector('#btn').addEventListener('click', function() {
        console.log(food.value);
    });
});