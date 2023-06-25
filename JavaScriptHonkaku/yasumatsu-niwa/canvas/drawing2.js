let mouseDown = false;
let penX = 0;
let penY = 0;
let penWidth = 10;
let ctx;
let shape = 'arc';
let color = 'green';

window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas1');
    const arc = document.getElementById('arc');
    const rect = document.getElementById('rect');
    const penSliderBar = document.getElementById('width');
    const colorPalette = document.getElementById('color');
    const canvasWidth = document.getElementById('canvas-width');
    const canvasHeight= document.getElementById('canvas-height');
    ctx = canvas.getContext('2d');

    const setMouseDown = b => mouseDown = b;
    const draw = () => {
        ctx.beginPath();
        ctx.fillStyle = color;
        if (shape === 'arc') {
            ctx.arc(penX + 20, penY + 20, penWidth / 2, 0, Math.PI*2, false);
        } else if (shape === 'rect') {
            ctx.rect(penX + 10, penY + 10, penWidth, penWidth);
        }
        ctx.fill();
    }
    canvas.addEventListener('mousemove', event => {
        if (mouseDown){
            //マウス座標とCanvasの座標を適当に調整
            penX = event.offsetX - 15;
            penY = event.offsetY - 15;

            draw();
        }
    });
    canvas.addEventListener('mousedown', () => setMouseDown(true));
    canvas.addEventListener('mouseout', () => setMouseDown(false));
    canvas.addEventListener('mouseup', () => setMouseDown(false));

    arc.addEventListener('click', event => {
        shape = event.target.value;
    });
    rect.addEventListener('click', event => {
        shape = event.target.value;
    });
    penSliderBar.addEventListener('change', () => {
        penWidth = penSliderBar.value;
    });
    colorPalette.addEventListener('change', () => {
        color = colorPalette.value;
    });
    canvasWidth.addEventListener('change', () => {
        canvas.width = canvasWidth.value;
    });
    canvasHeight.addEventListener('change', () => {
        canvas.height = canvasHeight.value;
    });
});



const changeShape = elem => {
    shape = elem.value;
}

const onMouseMove = event => {
    //マウスボタンを押している場合は描画する
    if (mouseDown){
        //マウス座標とCanvasの座標を適当に調整
        penX = event.clientX;
        penY = event.clientY;
        draw();
    }
};

const onMouseDown = b => { mouseDown = b; }