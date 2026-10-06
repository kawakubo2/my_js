// const result  = document.getElementById('result');
const result  = document.querySelector('#result');
result.style.backgroundColor = 'red';
result.style.color = 'white';

const timer = setInterval(() => {
  const current = new Date();
  result.textContent = current.toLocaleString();
}, 1000);

