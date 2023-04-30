document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        const result = [];
        const foods = document.getElementsByName('food');
        /*
        for (let i = 0, len = foods.length; i < len; i++) {
            const food = foods.item(i);
            if (food.checked) {
                result.push(food.value);
            }
        }
        alert(result.toString());
        */
        /*
        for (const food of foods) {
            if (food.checked) {
                result.push(food.value);
            }
        }*/
        const foods2 = Array.from(foods);     
        const result2 = foods2.filter(food => food.checked).map(food => food.value);
        alert(result2.toString());
    });
});