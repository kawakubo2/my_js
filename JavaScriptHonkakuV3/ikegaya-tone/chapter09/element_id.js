const current = new Date();
// const result = document.querySelector('#result');
const result = document.getElementById('result');
result.textContent = current.toLocaleString();
result.style.backgroundColor = 'navy';
result.style.color = 'white';
