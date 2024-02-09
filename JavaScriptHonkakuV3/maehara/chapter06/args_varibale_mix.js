function printf(format, ...args) {
    for (let i = 0; i < args.length; i++) {
        const pattern = new RegExp(`\\{${i}\\}`, 'g');
        format = format.replaceAll(pattern, args[i]);
    }
    console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です...あれ？{0}さんですよね？', '掛谷', '山田');

const printf2 = (format2, ...args) => {
    args.map((arg, index) => 
        format2 = format2.replaceAll(new RegExp(`\\{${index}\\}`, 'g'), arg));
    console.log(format2);
}

printf2('こんにちは、{0}さん。私は{1}です...あれ？{0}さんですよね？', '掛谷', '山田');

const array1 = ['掛谷', '山田'];
printf('こんにちは、{0}さん。私は{1}です...あれ？{0}さんですよね？', ...array1);
