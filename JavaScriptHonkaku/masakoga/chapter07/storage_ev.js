window.addEventListener('storage', function(e) {
    let main = document.getElementById('main');
    if (e.key === 'JSSample') {
        console.log('変更されたキー:' + e.key);
        console.log('変更前の値:' + e.oldValue);
        console.log('変更後の値:' + e.newValue);
        console.log('発生元のページ:' + e.url);

        main.textContent = 'キー:' + e.key + '\n変更前の値:' + e.oldValue +
            '\n変更後の値:' + e.newValue;

    }
});