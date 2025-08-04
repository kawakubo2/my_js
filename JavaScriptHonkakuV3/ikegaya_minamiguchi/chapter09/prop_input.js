document.addEventListener('DOMContentLoaded', () => {
    const member = document.querySelector('#name');
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(member.value);
        console.log(member.getAttribute('value'));
    });
});