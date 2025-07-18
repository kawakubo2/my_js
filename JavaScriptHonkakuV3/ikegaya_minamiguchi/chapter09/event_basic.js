document.addEventListener('DOMContentLoaded', function() {
    const pic = document.querySelector('#cover');
    pic.addEventListener('mouseenter', function() {
        pic.src = './images/wings.jpg';
    });
    pic.addEventListener('mouseleave', function() {
        pic.src = './images/wings_mini.jpg';
    });
});