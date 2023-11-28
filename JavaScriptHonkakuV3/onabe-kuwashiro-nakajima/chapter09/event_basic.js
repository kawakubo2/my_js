document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('#cover');
    pic.addEventListener('mouseenter', e => {
        e.target.src = 'images/wings.jpg';
        e.target.style.border = '3px solid blue';
    });
    pic.addEventListener('mouseenter', e => {
        console.log('mouseが画像ファイルに入り込んだ！');
    });
    pic.addEventListener('mouseleave', e => {
        e.target.src = 'images/wings_mini.jpg';
        e.target.style.border = '';
    });
    pic.addEventListener('mouseleave', e => {
        console.log('mouseが画像ファイルから出て行った！');
    });
});