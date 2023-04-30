console.log('---< innerWidth >---')

const result = document.getElementById('result');
const btn = document.getElementById('btn');

let timer = setInterval(() => {
    result.textContent = window.innerWidth;
}, 1000);

btn.addEventListener('click', function() {
    clearInterval(timer);
});
