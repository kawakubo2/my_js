document.addEventListener('DOMContentLoaded', () => {
    const error = document.getElementById('error');
    const upfile = document.getElementById('upfile'); 
    const canvas = document.getElementById('canvas');
    const img = document.getElementById('img');
    const ctx = canvas.getContext('2d');
    const resize = document.getElementById('resize');

    const isValidContentType = (file, contentTypes) => {
        return contentTypes.has(file['type']);
    };

    document.getElementById('file').addEventListener('change', () => {
        const file = document.getElementById('file').files[0];
        const types = new Set(['image/jpeg', 'image/png', 'image/gif']);
        error.textContent = '';
        if (!isValidContentType(file, types)) {
            error.textContent('JPEG、PNG、GITのいずれかの画像を選択してください。');
            return;
        }
        const fr = new FileReader();
        fr.addEventListener('load', () => {
            img.src = fr.result;
        });
        fr.readAsDataURL(file);
    });

    resize.addEventListener('click', () => {
        // プレビューのimg要素に標示した画像をImageオブジェクトにする
        const image = new Image();
        image.src = img.src;
        
        const width = image.width;
        const height = image.height;
        const minSize = 800;

        if (width > minSize) {
            const ratio = minSize / width;
            const h = Math.floor(image.height * ratio);
            canvas.width = minSize;
            canvas.height = h;
            ctx.drawImage(image, 0, 0, minSize, h);
        }
    });
});