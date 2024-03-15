document.addEventListener('DOMContentLoaded', () => {
    function getRadioValue(name) {
        let result = '';
        const elems = document.querySelectorAll(`input[name="${name}"]`);
        for (const elem of elems) {
            if (elem.checked) {
                result = elem.value;
                break;
            }
        }
        return result;
    }
    console.log(getRadioValue('food', '焼肉'));
});
