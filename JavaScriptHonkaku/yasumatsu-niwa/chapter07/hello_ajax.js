document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', event => {
        event.preventDefault();
        const result = document.getElementById('result');
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    result.textContent = xhr.responseText;
                } else {
                    result.textContent = 'サーバーエラーが発生しました。';
                }
            } else {
                result.textContent = '通信中...';
            }
        }
        xhr.open('GET', 'hello_ajax.php?name=' + 
            encodeURIComponent(document.getElementById('name').value), true);
        xhr.send(null);
    });
})