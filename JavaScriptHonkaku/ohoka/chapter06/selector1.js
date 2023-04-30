let elems = document.querySelectorAll('p,li');
for (let i = 0, len = elems.length; i < len; i++) {
    elems.item(i).style.border = 'solid 1px red';
    elems.item(i).style.background = 'lightgreen';
}