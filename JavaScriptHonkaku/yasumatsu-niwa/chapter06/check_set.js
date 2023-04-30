document.addEventListener('DOMContentLoaded', () => {
    const setCheckboxValues = (name, values) => {
        const items = document.getElementsByName(name);
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items.item(i);
            if (values.indexOf(item.value) > -1) {
                item.checked = true;
            }
        }
    };
    setCheckboxValues('food', ['ラーメン', '焼肉']);
});