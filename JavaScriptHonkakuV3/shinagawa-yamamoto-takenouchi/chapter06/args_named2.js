// let width = 10; // 幅
// let height = 20; // 高さ
// let x = 100;
// let y = 100;
// let color = 'black';
// let background = 'white';

function print_rectangle({
    width = 10,
    height = 10,
    x = 100,
    y = 100,
    color = 'black',
    background = 'white'
}) {
    console.log(`幅: ${width} 高さ: ${height} X座標: ${x} Y座標: ${y} 文字色: ${color} 背景色: ${background}`)
}

print_rectangle({ color: 'blue', y: 200 });
