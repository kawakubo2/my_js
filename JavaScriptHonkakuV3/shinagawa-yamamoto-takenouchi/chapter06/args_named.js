function showDialog({
    content = '',
    title = 'My Dialog',
    width = 100,
    height = 100,
    position = 'center',
    model = false
}) {
    console.log(content);
    console.log(title);
    console.log(width);
    console.log(height);
    console.log(position);
    console.log(model);
}

showDialog({
    content: 'ダイアログです。',
    modal: true
});
