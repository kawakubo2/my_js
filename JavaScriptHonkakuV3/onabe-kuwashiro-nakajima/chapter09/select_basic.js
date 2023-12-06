document.addEventListener('DOMContentLoaded', () => {
    function getSelectValueById(id) {
        const select = document.querySelector(`#${id}`);
        return select.value;
    }
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getSelectValueById('food'));
        console.log(getSelectValueById('bloodtype'));
    })
});