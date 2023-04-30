window.onload = function() {
    document.getElementById('btn').onclick = function() {
        window.alert('ボタンがクリックされました。');
    };
    document.getElementById('food').onchange = function() {
        if (this.value === '') {
            window.alert('何か指定してください。');
        } else {
            window.alert(this.value + 'に変更されました。');
        }
    }
};