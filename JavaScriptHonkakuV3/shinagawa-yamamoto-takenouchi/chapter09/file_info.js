document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#file');
    input.addEventListener('change', () => {
        const files = input.files;
        for (const file of files) {
            console.log(`
            ファイル名: ${file.name}
            種類: ${file.type}
            サイズ: ${(file.size / 1024).toFixed(2)}KB
            最終更新日: ${new Date(file.lastModified).toLocaleDateString()}
            `);
        }
    });
});