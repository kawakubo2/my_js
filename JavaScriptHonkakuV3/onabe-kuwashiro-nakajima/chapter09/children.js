function getValuesInSelect(id) {
    const result = [];
    const opts = document.querySelector(`#${id}`);
    for (const opt of opts) {
        result.push(opt.value);
    }
    return result;
}

console.log(getValuesInSelect('food'));
console.log(getValuesInSelect('language'));

const foods = document.querySelector('#food');
const opts2 = foods.childNodes;
for (const opt of opts2) {
    if (opt.nodeType === 1) {
        console.log(opt.value);
    }
}

let child = foods.firstElementChild;
while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}
