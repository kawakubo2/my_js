let s = document.getElementById('food');
let child = s.firstChild;
while (child) {
    if (child.nodeType === 1) {
        console.log(child.value);
    }
    child = child.nextSibling;
}
console.log('逆順');
child = s.lastChild;
while (child) {
    if (child.nodeType === 1) {
        console.log(child.value);
    }
    child = child.previousSibling;
}

console.log('firstElementChild, nextElementSibling');
child = s.firstElementChild;
while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}