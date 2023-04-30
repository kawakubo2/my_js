document.addEventListener('DOMContentLoaded', function() {
    const setCheckValue = (name, value) => {
        let elems = document.getElementsByName(name);
        for (let i = 0, len = elems.length; i < len; i++) {
            let elem = elems.item(i);
            if (value.indexOf(elem.value) > -1) {
                elem.checked = true;
            }
        }
    }
    setCheckValue('food', ['餃子', '焼肉']);
});