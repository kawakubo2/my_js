const files = [
    'aaa.js', 'bbb.ccc.py', 'ddd.c', 'eee.fff.js', 'ggg.java', 'fff.js'
];

/*
 ['aaa.js', 'eee.fff.js', 'fff.js']
*/
function getFilesByExtension(files, ext) {
    const result = [];
    for (const file of files) {
        if (file.endsWith(ext)) {
            result.push(file);
        }
    }
    return result;
}

console.log(getFilesByExtension(files, '.js'));