const btn = document.querySelector('#btn');
const target = document.querySelector('#target');
btn.addEventListener('click', () => {
  target.innerHTML = document.querySelector('#name').value;
});