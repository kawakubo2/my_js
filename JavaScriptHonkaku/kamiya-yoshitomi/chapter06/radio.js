document.addEventListener('DOMContentLoaded', () => {
    const getRadioValue = name => {
        let result =  '';
        const elems = document.getElementsByName(name);
        for (const elem of elems) {
            if (elem.checked) {
                result = elem.value;
                break;
            }
        }
        return result;
    }
    document.getElementById('btn').addEventListener('click', () => {
        alert(getRadioValue('food'));
    });
});