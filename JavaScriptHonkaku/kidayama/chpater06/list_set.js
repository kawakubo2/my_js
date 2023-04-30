const setListValue = (name, value) => {
    const opts = document.getElementById(name);
    for (let i = 0, len = opts.length; i < len; i++) {
        const opt = opts.item(i);
        if (value.indexOf(opt.value) > -1) {
            opt.selected = true;
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    setListValue('food', ['餃子', '焼肉']);
});