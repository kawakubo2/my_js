document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        const foods = Array.from(document.getElementsByName('food'));
        /*
        const result = [];
        for (const food of foods) {
            if (food.checked) {
                result.push(food.value);
            }
        }
        */
        const result = foods
                        .filter(f => f.checked)
                        .map(f => f.value);
        alert(result.toString());
    });
})