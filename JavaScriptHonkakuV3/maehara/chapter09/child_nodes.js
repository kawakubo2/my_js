function getOptionValues(selector) {
    const s = document.querySelector(selector);
    const opts = s.childNodes;
    const result = [];
    for (const opt of opts) {
        if (opt.nodeType === 1) result.push(opt.value);
        // result.push(`nodeType=${opt.nodeType} vlaue=${opt.value}`);
    }
    return result;
}

console.log(getOptionValues('#food'));