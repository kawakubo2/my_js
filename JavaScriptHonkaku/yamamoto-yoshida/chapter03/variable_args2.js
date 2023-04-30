function printf(format) {
    for (let i = 1, len = arguments.length; i < len; i++) {
        const pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf("こんにちは、{0}さん。私は{1}です。...{0}さんですよね(;^_^A", "掛谷", "山田");