document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('#cover');
    function addBoxShadow() {
        pic.style.border = "solid 1px #999";
        pic.style.boxShadow = "10px 10px 10px #aaa";
    }
    function removeBoxShadow() {
        pic.style.border = "";
        pic.style.boxShadow = "";
    }
    pic.addEventListener('mouseenter', () => {
        pic.src = 'images/wings.jpg';
    });
    pic.addEventListener('mouseenter', addBoxShadow);
    pic.addEventListener('mouseleave', () => {
        pic.src = 'images/wings_mini.jpg';
    });
    pic.addEventListener('mouseleave', removeBoxShadow);
    document.querySelector('#btn').addEventListener('click', () => {
        pic.removeEventListener('mouseenter', addBoxShadow);
        pic.removeEventListener('mouseleave', removeBoxShadow);
    });
});