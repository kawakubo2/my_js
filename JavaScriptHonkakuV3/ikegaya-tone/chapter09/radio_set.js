document.addEventListener('DOMContentLoaded', () => {
    function setRadioValue(name, value) {
        const elems = document.querySelectorAll(`input[name="${name}"]`);
        for (const elem of elems) {
            if (elem.value === value) {
                elem.checked = true;
                break;
            }
        }
        
    }
    setRadioValue('food', '餃子');
    setRadioValue('blood', 'B');
});