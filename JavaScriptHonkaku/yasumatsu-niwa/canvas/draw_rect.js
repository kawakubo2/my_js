document.addEventListener('DOMContentLoaded', () => {
    const draw = (width = 40, height = 40, color = 'green') => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'green';
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                ctx.fillRect(i * (width + 10) + 10, j * (height + 10) + 10, width, height);
                ctx.moveTo((i + 1) * (width + 10) + 10, j * (height + 10) + 10);
            }
        }
        ctx.stroke();
    };
    const width_input = document.getElementById('width');
    const height_input = document.getElementById('height');
    const color_input = document.getElementById('color');
    document.getElementById('btn').addEventListener('click', () => {
        draw(width_input.value, height_input.value, color_input.value);
    })
});
