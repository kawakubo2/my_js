function getSelectValue(name) {
    const result = [];
    const opts = document.querySelector(name).options;

    for (const opt of opts) {
        if (opt.selected) { result.push(opt.value); }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getSelectValue('#food'));
    });
});