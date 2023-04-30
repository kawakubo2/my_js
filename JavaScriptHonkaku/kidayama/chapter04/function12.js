const files = [
    'aaa.js', 'bbb.ccc.py', 'ddd.c', 'eee.fff.js', 'ggg.java', 'fff.js'
];

/*
 ['aaa.js', 'eee.fff.js', 'fff.js']
*/
function getJavaScriptFiles(files) {
    const result = [];
    for (const file of files) {
        /*
        if (file.endsWith('.js')) {
            result.push(file);
        }
        */
       const lastPos = file.lastIndexOf('.');
       const ext = file.substr(lastPos);
       if (ext === '.js') {
           result.push(file);
       }
    }
    return result;
}

console.log(getJavaScriptFiles(files));