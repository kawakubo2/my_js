function getValuesInSelectById(id) {
    const parent = document.querySelector(`#${id}`);
    let child = parent.firstElementChild;
    const result = [];
    while(child) {
        result.push(child.value);
        child = child.nextElementSibling;
    }
    return result;
}

const ans = getValuesInSelectById('food');
console.log(ans);
const b = getValuesInSelectById('bloodtype');
console.log(b);