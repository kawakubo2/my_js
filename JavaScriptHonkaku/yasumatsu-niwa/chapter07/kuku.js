document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('tbody');
    for (let i = 1; i <= 9; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= 9; j++) {
            console.count('kuku');
            const td = document.createElement('td');
            const text = document.createTextNode(i * j);
            td.appendChild(text);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
});