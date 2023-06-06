document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(時計回り)
        ctx.moveTo(65, 65);
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左目
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右目
        ctx.stroke();
    }
});