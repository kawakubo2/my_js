function getFileSize(size) {
    const units = ['', 'K', 'M', 'G', 'T', 'P'];
    let temp = size;
    let index = 0;
    while (temp / 1024 > 1) {
        index++;
        temp = Math.floor(temp / 1024);
    }
    return `${(size / Math.pow(1024, index)).toFixed(2)}${units[index]}B`;
}


document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#file');
    input.addEventListener('change', () => {
        const files = input.files;
        for (const file of files) {
            console.log(`
                ファイル名: ${file.name}
                種類: ${file.type}
                サイズ: ${getFileSize(file.size)}
                最終更新日: ${new Date(file.lastModified).toLocaleString()}
            `);
        }
    });
});