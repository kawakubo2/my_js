document.addEventListener('DOMContentLoaded', () => {
    const getCheckbox = (formName) => {
        const result = [];
        const boxes = document.getElementsByName(formName);
        for (const box of boxes) {
            if (box.checked) {
                result.push(box.value);
            }
        }
        return result;
    }
    console.log(getCheckbox('food'));
});