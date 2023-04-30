const setRadioValue = (name, value) => {
    const elems = document.getElementsByName(name);
    for (let i = 0, len = elems.length; i < len; i++) {
        const elem = elems.item(i);
        if (elem.value === value) {
            elem.checked = true;
            break;
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    setRadioValue('food', '餃子');
});