document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('#cover');
    console.dir(pic);
    pic.onmouseenter = function() {
        pic.src = 'images/wings.jpg';
    };
    pic.onmouseleave = function() {
        pic.src = 'images/wings_mini.jpg';
    };
})
