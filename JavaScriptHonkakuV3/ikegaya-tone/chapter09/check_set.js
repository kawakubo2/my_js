document.addEventListener('DOMContentLoaded', () => {
    function setCheckValue(name, values) {
        const elems = document.querySelectorAll(`input[name="${name}"]`);
        for (const elem of elems) {
            elem.checked = values.includes(elem.value);
        }
    }
    setCheckValue('food', ['餃子', '焼肉']);
});