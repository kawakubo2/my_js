/*
 color: rgb(168, 255, 172);
*/

function rgb2hex(rgb) {
    let temp = rgb.substring(rgb.indexOf('(') + 1);
    temp = temp.substring(0, temp.indexOf(')'));
    let array = temp.split(',');
    return '#' + Number.parseInt(array[0].trim()).toString(16)
               + Number.parseInt(array[1].trim()).toString(16)
               + Number.parseInt(array[2].trim()).toString(16)
}

console.log(rgb2hex('rgb(168, 255, 172)'));

function rgb2hex2(rgb) {
    return '#' + rgb.replace(/rgb\((.+)\)/, '$1')
        .split(',')
        .map(t => Number.parseInt(t.trim()).toString(16)).join('');
}

console.log(rgb2hex2('rgb(168, 255, 172)'));