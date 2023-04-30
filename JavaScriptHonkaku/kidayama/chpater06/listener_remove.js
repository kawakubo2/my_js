document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById('elem');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    const toggleBackgroundColor = () => {
        elem.classList.toggle('listener1');
    }

    btn1.addEventListener('click', toggleBackgroundColor);
    btn2.addEventListener('click', function() {
        elem.classList.toggle('listener2');
    });
    let backgroundFlag = true;
    btn3.addEventListener('click', function() {
        if (backgroundFlag) {
            btn1.removeEventListener('click', toggleBackgroundColor);
        } else {
            btn1.addEventListener('click', toggleBackgroundColor);
        }
        backgroundFlag = !backgroundFlag;
    });
});