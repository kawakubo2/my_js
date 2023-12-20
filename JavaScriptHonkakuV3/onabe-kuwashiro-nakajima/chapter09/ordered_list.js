/*
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>SQL</li>
    <li>Java</li>
</ol>
*/
const langs = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Java'];

document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('#result');
    const ol = document.createElement('ol');
    for (const lang of langs) {
        const li = document.createElement('li');
        li.textContent = lang;
        ol.append(li);   
    }
    div.append(ol);
});