document.addEventListener('DOMContentLoaded', () => {
    const getRadioValue = name => {
        let result = '';
        const items = document.getElementsByName(name);
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items.item(i);
            if (item.checked) {
                result = item.value;
                break;
            }
        }
        return result;
    };
    document.getElementById('btn').addEventListener('click', () => {
        alert(getRadioValue('food'));
    });
});