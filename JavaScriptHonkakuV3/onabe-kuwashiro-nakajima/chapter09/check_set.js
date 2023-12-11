function setCheckValues(name, values) {
    const elems = document.querySelectorAll(`input[name="${name}"]`);
    for (const elem of elems) {
        elem.checked = values.includes(elem.value);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    setCheckValues('food', ['餃子', '焼肉']);
});