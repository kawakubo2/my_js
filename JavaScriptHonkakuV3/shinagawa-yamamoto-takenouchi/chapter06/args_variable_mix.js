function printf(format, ...args) {
    for (let i = 0; i < args.length; i++) {
        const pattern = new RegExp(`\\{${i}\\}`, 'g');
        format = format.replaceAll(pattern, args[i]);
    }
    console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です。...あれ？{0}さんですよね。', '掛谷', '山田');
