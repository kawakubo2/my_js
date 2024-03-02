function getOptionValues(selector) {
    const s = document.querySelector(selector);
    const opts = s.children;
    const result = [];
    for (const opt of opts) {
        result.push(opt.value);
    }
    return result;
}

console.log(getOptionValues('#food'));