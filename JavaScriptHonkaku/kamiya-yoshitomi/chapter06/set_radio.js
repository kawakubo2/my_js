document.addEventListener('DOMContentLoaded', () => {
    const setRadioValue = (name, value) => {
        const elems = document.getElementsByName(name);
        for (const elem of elems) {
            if (elem.value === value) {
                elem.checked = true;
                break;
            }
        }
    }
    setRadioValue('food', 'ラーメン');
});