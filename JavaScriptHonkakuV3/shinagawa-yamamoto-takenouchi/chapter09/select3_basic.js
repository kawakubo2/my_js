document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btn');
    function setValue(name, value) {
        const select = document.querySelector(name);
        for (const opt of select.options) {
            if (opt.value === value) {
                // opt.selected = true;
                select.value = opt.value;
                return;
            }
        }
        console.log("該当データなし");
        select.value = '';
    }
    button.addEventListener('click', () => {
        setValue('#food', document.querySelector('#opt_value').value);
    });
});