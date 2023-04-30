function printf(format) {
    for (let i = 1, len = arguments.length; i < len; i++) {
        const pattern = new RegExp("\\{" + (i - 1) + "\\}", "g");
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('もうすぐかな({1}独り言)。来た！ こんにちは、{0}さん。私は{1}です。...あれ？{0}さんですよね。', "掛谷", "山田");