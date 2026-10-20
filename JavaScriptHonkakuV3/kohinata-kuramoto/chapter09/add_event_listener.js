const p = document.querySelector('#main');
const counter = document.querySelector('#counter');
p.addEventListener('click', (e) => {
  p.style.border = '1px solid red';
});

let count = 0;
p.addEventListener('click', (e) => {
  counter.textContent = `${count}回目`;
  count++;
});

p.addEventListener('click', (e) => {
  const colors = ['blue', 'green', 'red', 'yellow', 'gray'];
  const index = Math.floor(Math.random() * colors.length);
  p.style.backgroundColor = colors[index];
});