function getOptionValues(selector) {
    const s = document.querySelector(selector);
    let child = s.firstElementChild;
    const result = [];
    while (child) {
        result.push(child.value);
        child = child.nextElementSibling;
    }
    return result;
}

console.log(getOptionValues('#food'));