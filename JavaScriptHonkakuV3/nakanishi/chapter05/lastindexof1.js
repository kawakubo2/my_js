const files = ['aaa.js', 'bbb.java', 'ccc.py', 'ddd.eee.js', 'fff.ggg.hhh.js'];

console.log('--- lastIndexOfを使ったとき方 ---');
for (const file of files) {
    const pos = file.lastIndexOf('.');
    if (file.substring(pos + 1) === 'js') {
        console.log(file);
    }
}

console.log('--- splitを使ったとき方 ---');
for (const file of files) {
    const result = file.split('.');
    if (result.length > 1) {
        if (result[result.length - 1] === 'js') {
            console.log(file)
        }
    }
}