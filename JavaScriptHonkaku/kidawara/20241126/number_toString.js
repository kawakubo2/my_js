const { SourceTextModule } = require("vm");

const number = 65535;

console.log(number.toString(2));
console.log(number.toString(8));
console.log(number.toString(16));

/*
rgb(128, 255, 64) ---> #xxxxxx;
*/
const color = "rgb(127, 255, 63)";
const pattern = /^rgb\s*\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
const [, red, green, blue ] = color.match(pattern).map(n => Number(n));
let color_code = [red, green, blue].map(e => Number(e).toString(16)).reduce((result, e) => result + e, '#');
console.log(color_code);
