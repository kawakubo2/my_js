// (2)
const abc = document.querySelector('#abc');
abc.onclick = function() {
    abc.style.backgroundColor = 'yellow';
}

// (3)
const xyz = document.querySelector('#xyz');
xyz.addEventListener('click', () => {
    console.log('この方法が一番新しい。イベントリスナを複数登録できるし、途中で解除もできてしまう');
});
let flag = true;
xyz.addEventListener('click', () => {
    if (flag) {
        xyz.style.border = '10px solid red';
    } else {
        xyz.style.border = '';
    }
    flag = !flag;
});
function changeBackgroundColor() {
    const colors = ['white', 'black', 'gray', 'red', 'green', 'blue', 'yellow'];
    xyz.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
xyz.addEventListener('click', changeBackgroundColor);
/*
xyz.removeEventListener('click', changeBackgroundColor);
*/