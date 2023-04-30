const getRadioValue = name => {
    let result = '';
    const elems = document.getElementsByName('food');
    for (let i = 0, len = elems.length; i < len; i++) {
        if (elems.item(i).checked) {
            result = elems.item(i).value;
            break;
        }
    }
    return result;
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        alert(getRadioValue('food'));
    });
});