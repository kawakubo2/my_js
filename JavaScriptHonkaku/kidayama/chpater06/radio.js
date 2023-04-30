const getRadioValue = name => {
    let result = '';
    const elems = document.getElementsByName(name);
    for (let i = 0, len = elems.length; i < len; i++) {
        const elem = elems.item(i);
        if (elem.checked) {
            result = elem.value;
            break;
        }
    }
    return result;
};
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        alert(getRadioValue('food'));
    });
});