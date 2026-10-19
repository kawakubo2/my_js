let color = '#67ff89';
color = color.replace('#', '0x');
color = Number(color);

const mask = 0xff;

const red = (color >> 16);
console.log(`red=${red}`);

const green = (color >> 8) & mask;
console.log(`green=${green}`);

const blue = color & mask;
console.log(`blue=${blue}`);

const color_str = `rgb(${red}, ${green}, ${blue})`;

console.log(color_str);

console.log(6 * 16 + 7);
console.log(16 * 15 + 1 * 15);
console.log(16 * 8 + 9);

