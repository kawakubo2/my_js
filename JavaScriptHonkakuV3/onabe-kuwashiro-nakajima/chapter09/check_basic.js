document.addEventListener('DOMContentLoaded', () => {
    function getCheckboxValuesByName(name) {
        const result = [];
        const elems = document.querySelectorAll(`input[name=${name}`);
        for (const elem of elems) {
            if (elem.checked) {
                result.push(elem.value);
            }
        }
        return result;
    }
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getCheckboxValuesByName('food'));
    })
});