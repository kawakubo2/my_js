document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        const result = [];
        const foods = document.getElementsByName('food');
        for (let i = 0, len = foods.length; i < len; i++) {
            const food = foods.item(i);
            if (food.checked) {
                result.push(food.value);
            }
        }
        alert(result.toString());
    });
});