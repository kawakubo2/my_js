document.addEventListener('DOMContentLoaded', () => {
    const getCheckboxValues = name => {
        const result = [];
        const items = document.getElementsByName(name);
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items.item(i);
            if (item.checked) {
                result.push(item.value);
            }
        }
        return result;
    };
    document.getElementById('btn').addEventListener('click', () => {
        const foods = getCheckboxValues('food');
        window.alert(foods.toString());
    })
});