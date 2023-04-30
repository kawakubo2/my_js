const createTd = value => {
    let td = document.createElement('td');
    let text = document.createTextNode(value);
    td.appendChild(text);
    return td;
};

const createTdWithButton = (className, buttonName) => {
    let td = document.createElement('td');
    let button = document.createElement('input');
    button.type = 'button';
    button.className = className;
    button.value =  buttonName;
    td.appendChild(button)
    return td;
};

document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.getElementById('booklist');
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let price = document.getElementById('price');
    tbody.addEventListener('click', function(event) {
      let targetButton = event.target;
      if (targetButton.className === 'add') {
        let currentTr = targetButton.parentNode.parentNode;
        let nextTr = currentTr.nextElementSibling;
        
        let tr = document.createElement('tr');
        
        let titleTd = createTd(title.value);
        let authorTd = createTd(author.value);
        let priceTd = createTd(price.value);
    
        const addTd = createTdWithButton('add', '追加');
        let deleteTd = createTdWithButton('delete', '削除');
        let upTd = createTdWithButton('up', '△');
        let downTd = createTdWithButton('down', '▽');
        tr.appendChild(titleTd);
        tr.appendChild(authorTd);
        tr.appendChild(priceTd);
        tr.appendChild(addTd);
        tr.appendChild(deleteTd);
        tr.appendChild(upTd);
        tr.appendChild(downTd);
        
        tbody.insertBefore(tr, nextTr);

        title.value = '';
        author.value = '';
        price.value = '';
        title.focus();
      } else if (targetButton.className === 'delete') {
        let currentTr = targetButton.parentNode.parentNode;
        tbody.removeChild(currentTr);
      } else if (targetButton.className === 'up') {
        let currentTr = targetButton.parentNode.parentNode;
        let prevTr = currentTr.previousElementSibling;
        if (prevTr.id !== 'booklist-header') {
            tbody.insertBefore(currentTr, prevTr);
        }
      } else if (targetButton.className === 'down') {
        let currentTr = targetButton.parentNode.parentNode;
        let nextTr = currentTr.nextElementSibling;
        if (nextTr) {
            nextTr = nextTr.nextElementSibling;
        }
        tbody.insertBefore(currentTr, nextTr);
      }
      
    });
});