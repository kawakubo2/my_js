document.addEventListener('DOMContentLoaded', function() {
    const getRadioValue = (name) => {
        let result = '';
        let foods = document.getElementsByName(name);
        console.log(foods);
        for (let i = 0, len = foods.length; i < len; i++) {
            let food = foods.item(i);
            if (food.checked) {
                result = food.value;
                break;
            }
        }
        return result;
    }
    document.getElementById('btn').addEventListener('click', function(e) {
        console.log(getRadioValue('food'));
        console.log(getRadioValue('bloodtype'));
    }, false);
}, false);