document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("btn").addEventListener("click", function() {
        let pattern = document.getElementById('pattern');
        let target = document.getElementById('target');
        let result = document.getElementById('result');
        let regexp = new RegExp(pattern.value);
        if (regexp.test(target.value)) {
            result.textConent = '○';
        } else {
            result.textConent = 'x';
        }
    });
});

outer:
while (true) {
    let pattern = prompt('正規表現(終了時 exit): ');
    if (pattern == 'exit') break;
    let regexp = new RegExp(pattern);
    while (true) {
        let target = prompt('文字列(終了時 exit): ');
        if (target == 'exit') break;
        if (regexp.test(target)) {
            console.log('○');
        } else {
            console.log('x');
        }
    }
}