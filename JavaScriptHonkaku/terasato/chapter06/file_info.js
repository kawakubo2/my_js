const getUnitBySize = size => {
    const units = ['', 'K', 'M', 'G', 'T', 'P'];
    let index = 0;
    while (size / 1024 >= 1) {
        index++;
        size /= 1024;
    }
    return `${size.toFixed(3)}${units[index]}`;
}


window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function() {
        const inputs = document.getElementById('file').files;
        for (let i = 0, len = inputs.length; i< len; i++) {
            const input = inputs[i];
            console.log(`ファイル名: ${input.name}`);
            console.log(`種類: ${input.type}`);
            console.log(`サイズ: ${getUnitBySize(input.size)}`);
            console.log(`最終更新日: ${input.lastModifiedDate}`);
        }
    });
});