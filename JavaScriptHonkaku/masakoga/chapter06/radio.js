document.addEventListener('DOMContentLoaded', function() {
    const getRadioValue = name => {
        let result = "";
        let elems = document.getElementsByName(name);
        for (let elem of elems) {
            if (elem.checked) {
                result = elem.value;
                break;
            }
        }
        return result;
    }
    document.getElementById('btn').addEventListener('click', function() {
        alert(getRadioValue('food'));
    }, false);
}, false);