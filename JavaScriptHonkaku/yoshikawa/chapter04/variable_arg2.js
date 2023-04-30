const printf = (format, ...args) => {
    for (let i = 0, len = args.length; i < len; i++) {
        const pattern = new RegExp('\\{' + i + '\\}', 'g');
        format = format.replace(pattern, args[i]);
    }
    console.log(format);
};

printf('こんにちは、{1}さん。私は{0}です。...{1}さんですよね(;^_^A', '掛谷', '山田');