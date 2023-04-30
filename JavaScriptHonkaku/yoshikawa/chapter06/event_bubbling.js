const createTdWithButton = (className, valueName) => {
  const td = document.createElement('td');
  const button = document.createElement('input');
  button.className = className;
  button.value = valueName;
  button.type = 'button';
  td.appendChild(button);
  return td;
}
const createTd = a => {
  const td = document.createElement('td');
  const text = document.createTextNode(a);
  td.appendChild(text);
  return td;
}
const createTr = (a, b) => {
  const tr = document.createElement('tr');
  const aTd = createTd(a);
  const bTd = createTd(b);
  const addButtonTd = createTdWithButton('add', '追加');
  tr.appendChild(aTd);
  tr.appendChild(bTd);
  tr.appendChild(addButtonTd);
  return tr;
}
document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('tbody');
  tbody.addEventListener('click', event => {
    if (event.target.className === 'add') {
      const a = document.getElementById('a').value;
      const b = document.getElementById('b').value;
      const newTr = createTr(a, b);
      const currentTr = event.target.parentNode.parentNode;
      const nextTr = currentTr.nextElementSibling;
      tbody.insertBefore(newTr, nextTr);
    }
  });
});