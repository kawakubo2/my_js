document.addEventListener('DOMContentLoaded', () => {
    function getCheckboxValuesByAttributeName(attributeName) {
        const result = [];
        const items = document.querySelectorAll(`input[name="${attributeName}"]`);
        for (const item of items) {
            if (item.checked) {
                result.push(item.value);
            }
        }
        return result;
    }
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getCheckboxValuesByAttributeName('food'));
        console.log(getCheckboxValuesByAttributeName('insect'));
    });
});

