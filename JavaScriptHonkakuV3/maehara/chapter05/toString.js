const color1 = "(255,208,128)";

function degital2hex(digit) {
    let temp = digit.substring(1, digit.length - 1);
    const array = temp.split(',');
    let result = '#';
    for (const elem of array) {
        result += (elem - 0).toString(16);
    }
    return result;
}

console.log(degital2hex(color1));

function d2h(digit) {
    let temp = digit.substring(1, digit.length - 1);
    return '#' + temp.split(',').map(s => Number.parseInt(s).toString(16)).reduce((str, s) => str + s);
}

console.log(d2h(color1));