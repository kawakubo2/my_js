let mouseDown = false;
let penX = 0;
let penY = 0;
let penWidth = 10;
let ctx;
let shape = 'arc';

window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('mousemove', event => {
        if (mouseDown){
            //マウス座標とCanvasの座標を適当に調整
            penX = event.clientX - 15;
            penY = event.clientY - 15;
            draw();
        }
    });
    canvas.addEventListener('mousedown', function(event) {
        mousedown = event;
    });
    const draw = () => {
        ctx.beginPath();
        ctx.fillStyle = "#0099ff";
        if (shape === 'arc') {
            ctx.arc(penX, penY, penWidth, 0, Math.PI*2, false);
        } else if (shape === 'rect') {
            ctx.rect(penX, penY, 30, 30);
        }
        ctx.fill();
    }
    
});



const changeShape = elem => {
    shape = elem.value;
}

const draw = () => {
    if (!ctx){
        canvas = document.getElementById('canvas1');
        ctx = canvas.getContext('2d');
    }

    ctx.beginPath();
    ctx.fillStyle = "#0099ff";
    if (shape === 'arc') {
        ctx.arc(penX, penY, penWidth, 0, Math.PI*2, false);
    } else if (shape === 'rect') {
        ctx.rect(penX, penY, 30, 30);
    }
    ctx.fill();
}

const onMouseMove = event => {
    //マウスボタンを押している場合は描画する
    if (mouseDown){
        //マウス座標とCanvasの座標を適当に調整
        penX = event.clientX - 15;
        penY = event.clientY - 15;
        draw();
    }
    debug();
};

const onMouseDown = b => {
    mouseDown = b;
    debug();
};

const debug = () => {
    let s = "筆の座標: "+ penX +", "+ penY + "<br/>"
            + "マウスボタン:" + (mouseDown ? "押した" : "押していない") + "<br/>";
    document.getElementById("mouse_state").innerHTML = s;
};