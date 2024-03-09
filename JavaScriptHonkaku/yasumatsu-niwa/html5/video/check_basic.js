document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        const result = [];
        const foods = document.querySelectorAll('input[name="food"]');

        for (const food of foods) {
            if (food.checked) {
                result.push(food.value);
            }
        }
        console.log(result);
    })
});