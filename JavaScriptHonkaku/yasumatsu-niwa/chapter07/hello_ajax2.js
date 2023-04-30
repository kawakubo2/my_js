document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', async event => {
        event.preventDefault();
        const url = 'http://localhost:3000/JavaScriptHonkaku/yasumatsu-niwa/chapter07/hello_ajax2.php?name='
            + encodeURIComponent(document.getElementById('name').value, true);
        const response = await fetch(url);
        const text = await response.text()
        document.getElementById('result').textContent = text;
        
    });
});