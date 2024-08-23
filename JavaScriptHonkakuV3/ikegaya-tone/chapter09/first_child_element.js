const s = document.querySelector('#food');
let child = s.firstElementChild;
while (child) {
    console.log(child.value + ':' + child.textContent);
    child = child.nextElementSibling;
}