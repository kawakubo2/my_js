const setCheckValue = (name, value) => {
    const elems = document.getElementsByName(name);
    for (let i = 0, len = elems.length; i < len; i++) {
        const elem = elems.item(i);
        if (value.indexOf(elem.value) > -1) {
            elem.checked = true;
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    setCheckValue('food', ['餃子', '焼肉']);
});