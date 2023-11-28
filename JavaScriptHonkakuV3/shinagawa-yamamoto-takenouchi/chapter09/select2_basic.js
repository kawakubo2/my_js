function getSelectValue(name) {
    let result = ''; 
    const opts = document.querySelector(name).options;

    for (const opt of opts) {
        if (opt.selected) { 
            result = opt.value;
            break;
        }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getSelectValue('#food'));
    });
});