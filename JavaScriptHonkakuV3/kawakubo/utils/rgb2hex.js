function rgb2hex(rgb) {
    const pattern = /^rgb\s*\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    const [, red, green, blue ] = rgb.match(pattern).map(n => Number(n));
    return color_code = [red, green, blue].map(e => Number(e).toString(16)).reduce((result, e) => result + e, '#');
}

console.log(rgb2hex('rgb(127, 255, 63)'));

function hex2rgb(hex) {
    hex = hex.replace('#', '0x');
    let number = Number(hex);
    const rgbColor = [];
    let n = 256 ** 2
    for (let i = 0; i < 3; i++) {
        rgbColor.push(Math.floor(number / n))
        number = number % n;
        n /= 256;
    }
    return 'rgb(' + rgbColor.join(',') + ')';
}

console.log(hex2rgb('#7fff3f'));