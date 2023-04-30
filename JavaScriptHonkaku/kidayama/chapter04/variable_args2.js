function printf(format) {
    for (let i = 1, len = arguments.length; i < len; i++) {
        let pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('こんにちは、{1}さん。私は{0}です。...あれ？{1}さんですよね。', '掛谷', '山田');