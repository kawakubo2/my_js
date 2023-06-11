document.addEventListener('DOMContentLoaded', () => {
    const draw = (width = 40, height = 40, color = 'green') => {
        const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.reset();
        ctx.beginPath();
        if (color !== 'random') {
            ctx.fillStyle = color;
        }
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (color === 'random') {
                    ctx.fillStyle = colors[Math.floor(Math.random() * color.length)];
                }
                ctx.fillRect(i * (width + 10) + 10, j * (height + 10) + 10, width, height);
                ctx.moveTo((i + 1) * (width + 10) + 10, (j + 1) * (height + 10) + 10);
            }
        }
        ctx.closePath();
        ctx.stroke();
    };
    const width_input = document.getElementById('width');
    const height_input = document.getElementById('height');
    const color_input = document.getElementById('color');
    document.getElementById('btn').addEventListener('click', () => {
        draw(
            Number.parseInt(width_input.value), 
            Number.parseInt(height_input.value), 
            color_input.value);
    })
});
