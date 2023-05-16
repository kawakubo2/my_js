document.addEventListener('DOMContentLoaded', () => {
    const setCheckValue = (name, valueArray) => {
        const boxes = document.getElementsByName(name);
        for (const box of boxes) {
            if (valueArray.indexOf(box.value) > -1) {
                box.checked = true;
            }
        }
    }
    setCheckValue('food', ['餃子', '焼肉']);
});