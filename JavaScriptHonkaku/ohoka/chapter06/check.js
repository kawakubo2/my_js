document.addEventListener('DOMContentLoaded', function() {
    const getCheckboxValue = (name) => {
        let result = [];
        let elems = document.getElementsByName(name);

        for (let i = 0, len = elems.length; i < len; i++) {
            let elem = elems.item(i);
            if (elem.checked) {
                result.push(elem.value);
            }
        }
        return result;
    }
    document.getElementById('btn').addEventListener('click', function() {
        console.log(getCheckboxValue('food'));
    }, false);
}, false);