function printf(format) {
    for (let i = 1, len = arguments.length; i < len; i++) {
        let pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('こんにちは、{0}さん... 私は{1}です。{0}さんですよね？', '掛谷', '山田');

let name1 = '掛谷';
let name2 = '山田';
console.log(`こんにちは、${name1}。私は${name2}です。`);

