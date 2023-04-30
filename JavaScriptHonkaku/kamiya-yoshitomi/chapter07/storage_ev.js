window.addEventListener('storage', function(event) {
    console.log('変更されたキー: ' + event.key);
    console.log('変更前の値: ' + event.oldValue);
    console.log('変更後の値: ' + event.newValue);
    console.log('発生元ページ: ' + event.url);
});