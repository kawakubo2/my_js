const colors = {'red': '赤', 'yellow':'黄'};

console.log(colors['red']); // colors[キー] キーに対応する値の取得
colors['white'] = '白'; // colorsにキーが存在しない場合は、キーと値の登録

console.log(colors);

colors['yellow'] = '黄色'; // キーがすでに存在する場合は値の上書き

console.log(colors);

colors['red'] = '赤色';

console.log(colors);

for (const key in colors) {
    console.log(`${key}: ${colors[key]}`); // colors[key] ---> colors['yellow'] ---> '黄色'
}

console.log(colors['black']);

