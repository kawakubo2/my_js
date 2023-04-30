const getUnitBySize = size => {
    const unit_names = ['', 'K', 'M', 'G', 'T', 'P'];
    let temp = size;
    let index = 0;
    while (temp >= 1024) {
        index++;
        temp = Math.floor(temp /= 1024);
    }
    return (size / 1024 ** index).toFixed(2) + unit_names[index] + 'B';
};

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