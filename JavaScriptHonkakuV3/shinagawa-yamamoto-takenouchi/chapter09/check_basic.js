document.addEventListener('DOMContentLoaded', () => {
    function getCheckboxValuesByAttributeName(attributeName) {
        const result = [];
        const foods = document.querySelectorAll(`input[name="${attributeName}"]`);
        for (const food of foods) {
            if (food.checked) {
                result.push(food.value);
            }
        }
        return result;
    }
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getCheckboxValuesByAttributeName('food'));
        console.log(getCheckboxValuesByAttributeName('insect'));
    });
});

