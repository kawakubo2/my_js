document.addEventListener('DOMContentLoaded', function() {
    const setListValue = (name, value) => {
        let opts = document.getElementById(name);

        for (let i = 0, len = opts.length; i < len; i++) {
            let opt = opts.item(i);
            if (value.indexOf(opt.value) > -1) {
                opt.selected = true;
            }
        }
    };
    setListValue('food', ['ラーメン', '焼肉']);
});