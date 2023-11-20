const colors = { red: "赤", blue: "青", green: "緑"};

const new_colors = Object.assign(colors, {
    get: color => color in colors ? colors[color] : '?',
    set: (color_en, color_ja) => colors[color_en] = color_ja,
    exists: color => color in colors
})

console.log(new_colors.get('red'));
console.log(new_colors.get('yellow'));
new_colors.set('white', '白');
console.log(new_colors.get('white'));
new_colors.set('white', '白色');
console.log(new_colors.get('white'));
console.log(new_colors.exists('黒'));
console.log(new_colors.exists('blue'));
