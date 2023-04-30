document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function() {
        let inputs = document.getElementById('file').files;
        for (let i = 0, len = inputs.length; i < len; i++) {
            let input = inputs.item(i);
            console.log('--------------------------------')
            console.log(`ファイル名: ${input.name}`);
            console.log(`種類: ${input.type}`);
            console.log(`サイズ: ${input.size / 1024}KB`);
            console.log(`最終更新日時: ${input.lastModifiedDate}`);
        }
    });
});