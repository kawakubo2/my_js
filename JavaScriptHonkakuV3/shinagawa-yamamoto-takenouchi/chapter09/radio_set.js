function setRadioValue(name, value) {
    const elems = document.querySelectorAll(`input[name="${name}"`);
    for (const elem of elems) {
        if (elem.value === value) {
            elem.checked = true;
            break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setRadioValue('food', '餃子');
});