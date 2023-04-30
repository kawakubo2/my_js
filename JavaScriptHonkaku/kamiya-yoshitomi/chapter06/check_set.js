document.addEventListener('DOMContentLoaded', () => {
    const setCheckValue = (name, value) => {
        Array.from(document.getElementsByName(name))
            .filter(e => value.indexOf(e.value) > -1)
            .map(e => e.checked = true);
    };
    setCheckValue('food', ['餃子', '焼肉']);
});