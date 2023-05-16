window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.getElementById('file').files;
    for (const input of inputs) {
        console.log(`ファイル名: ${input.name}`);
        console.log(`種類: ${input.type}`);
        console.log(`サイズ: ${input.size}`);
        console.log(`最終更新日: ${input.lastModiedDate}`);
    }
});