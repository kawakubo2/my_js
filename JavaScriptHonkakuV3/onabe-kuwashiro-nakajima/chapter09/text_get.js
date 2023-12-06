document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');
    console.log(list.innerHTML);
    console.log('-------------------------------');
    console.log(list.textContent);

    // list.innerHTML = '<div onclick="alert(\'こんにちは\')">ここをクリック</div>';
});