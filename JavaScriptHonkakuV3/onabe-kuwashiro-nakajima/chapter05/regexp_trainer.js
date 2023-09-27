document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.getElementById('pattern');
    const option  = document.getElementById('option');
    const target  = document.getElementById('target');
    const btn     = document.getElementById('btn');
    const result  = document.getElementById('result');

    btn.addEventListener('click', event => {
        event.preventDefault();
        // 正規表現と対象文字列とも入力されている場合のみテストする
        if (pattern.value && target.value) {
            const regexp = new RegExp(pattern.value, option.value);
            if (regexp.test(target.value)) {
                result.textContent = '○';
            } else {
                result.textContent = '×';
            }
        } else {
            result.textContent = '正規表現または対象文字列が未入力です。';
        }
    });
});