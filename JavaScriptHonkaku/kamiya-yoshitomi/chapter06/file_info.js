document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('file').addEventListener('change', () => {
        const inputs = document.getElementById('file').files;
        for (const input of inputs) {
            console.log(`---< ファイル名: ${input.name} >---`);
            console.log(`種類: ${input.type}`);
            console.log(`サイズ: ${(input.size / 1024).toFixed(2)}KB`);
            console.log(`最終更新日: ${input.lastModifiedDate}`);
        }
    });
});