const setCheckValue = (name, value) => {
    const elems = Array.from(document.getElementsByName(name));
    elems.filter(elem => value.indexOf(elem.value) > -1).forEach(elem => elem.checked = true);        
}
document.addEventListener('DOMContentLoaded', function() {
    setCheckValue('food', ['餃子', '焼肉']);
});