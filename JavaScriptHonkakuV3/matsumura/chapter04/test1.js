/*
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>SQL</li>
    <li>Java</li>
    <li>Python</li>
</ul>
*/
const languages = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Java', 'Python'];
const fruits = ['banana', 'apple', 'orange', 'grape', 'strawberry', 'pear']

function createUl(items) {
    const ul = document.createElement('ul');
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }
    return ul;
}

const div = document.querySelector('#langs');
div.appendChild(createUl(languages));
const div2 = document.querySelector('#fruits');
div2.appendChild(createUl(fruits));