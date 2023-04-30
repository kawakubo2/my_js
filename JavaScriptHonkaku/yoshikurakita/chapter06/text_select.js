document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function(e) {
        let name = document.getElementById('name').value;
        let error_summary = document.getElementById('error_summary');
        error_summary.textContent = '';
        let errors = [];
        if (!name) {
            errors.push('名前は必須です。');
        } else {
            if (name.length > 20) {
                errors.push('名前は20文字以内で入力してください。');
            }
        }
        if (errors.length > 0) {
            e.preventDefault();
            let error_text = '';
            for (let error of errors) {
                error_text += `<li>${error}</li>`;
            }
            error_summary.innerHTML = error_text;
        }
        name.focus();
        name.select();
    });
});