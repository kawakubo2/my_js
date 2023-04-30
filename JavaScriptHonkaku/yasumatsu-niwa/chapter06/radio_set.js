document.addEventListener('DOMContentLoaded', () => {
    const setRadioValue = (name, value) => {
        const items = document.getElementsByName(name);
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items.item(i);
            if (item.value === value) {
                item.checked = true;
                break;
            }
        }
        return result;
    };
    setRadioValue('food', '餃子');
});