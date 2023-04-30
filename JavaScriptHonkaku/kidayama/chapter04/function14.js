const files = [
    'aaa.js', 'bbb.ccc.py', 'ddd.c', 'eee.fff.js', 'ggg.java', 'fff.js',
    'ggg.py', 'hhh.java', 'iii.c'
];

/*
{
    '.js': ['aaa.js', 'eee.fff.js', 'fff.js],
    '.py': ['bbb.ccc.py', 'ggg.py'],
    '.c' : ['ddd.c', 'iii.c],
    '.java': ['ggg.java', 'hhh.java']
}
*/
function getGroupByExtension(files) {
    const result = new Map();
    for (const file of files) {
        const ext = file.substr(file.lastIndexOf('.'));
        if (ext ===  -1) continue;
        if (!result.has(ext)) {
            result.set(ext, []);
        }
        result.set(ext, result.get(ext).push(file));
    }
    return result;
}

console.log(getGroupByExtension(files));
