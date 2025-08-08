function getCheckValus(selector) {
    const items = Array.from(document.querySelectorAll(selector));
    return items.filter(item => item.checked).map(item => item.value);
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getCheckValus('input[name="food"]'));
        console.log(getCheckValus('input[name="sports"]'));
    });
});