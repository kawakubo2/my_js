document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('result').innerHTML =
            'こんにちは' + document.getElementById('name').value + 'さん!';
    });
});