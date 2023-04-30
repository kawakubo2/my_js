document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let result = [];
        let foods = document.getElementsByName('food');
        for (let i = 0, len = foods.length; i < len; i++) {
            let food = foods.item(i);
            if (food.checked) {
                result.push(food.value);
            }
        }
        alert(result.toString());
    }, false);
}, false);