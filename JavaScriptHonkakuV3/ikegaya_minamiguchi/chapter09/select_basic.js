function getSelectValue(id) {
    return document.querySelector(`#${id}`).value;
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getSelectValue('food'));
        console.log(getSelectValue('bloodtype'));
    });
});