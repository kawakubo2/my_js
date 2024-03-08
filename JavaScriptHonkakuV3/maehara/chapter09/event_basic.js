const pic = document.querySelector('#cover');
pic.addEventListener('mouseenter', (e) => {
    e.target.src = 'images/wings.jpg';
});
pic.addEventListener('mouseleave', (e) => {
    e.target.src = 'images/wings_mini.jpg';
}); 