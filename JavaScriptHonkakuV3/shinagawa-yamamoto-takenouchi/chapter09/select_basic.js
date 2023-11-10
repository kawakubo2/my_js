document.addEventListener('DOMContentLoaded', () => {
    function getSelectValueById(id) {
        const elem = document.querySelector(`#${id}`);
        return elem.value;
    }
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getSelectValueById('food'));
        console.log(getSelectValueById('bloodtype'));
    })
});
