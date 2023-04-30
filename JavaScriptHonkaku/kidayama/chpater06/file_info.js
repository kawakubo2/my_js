window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function(e) {
        const inputs = document.getElementById('file').files;
        for (let i = 0, len = inputs.length; i < len; i++) {
            const input = inputs[i];
            console.log(`ファイル名: ${input.name}`);
            console.log(`種類　　　: ${input.type}`);
            console.log(`サイズ　　: ${input.size / 1024 + 'KB'}`);
            console.log(`最終更新日: ${input.lastModifiedDate}`);
        }
    });
});