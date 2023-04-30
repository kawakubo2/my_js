document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        const errors = [];
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        if (name.value.trim() === '') {
            errors.push('名前は必須入力です。');
        }
        if (!/^\d{1,3}$/.test(age.value)) {
            errors.push('年齢の形式に誤りがあります。');
        }
        const result = document.getElementById('result');
        result.innerHTML = errors.map(e => `<li>${e}</li>`).join('');
    });
});