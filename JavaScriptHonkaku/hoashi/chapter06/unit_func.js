function getSizeWithUnitName(size) {
    let s = size;
    const unitName = ['', 'K', 'M', 'G', 'T', 'P', 'Y'];
    let index = 0;
    while (s / 1024 >= 1) {
        index++;
        s /= 1024;
    }
    return s.toFixed(2) + unitName[index] + 'B';
}

const sizes = [726, 5656, 1642420091];
for (const size of sizes) {
    console.log(getSizeWithUnitName(size));
}

