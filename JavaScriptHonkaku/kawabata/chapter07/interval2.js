

document.addEventListener('DOMContentLoaded', function() {
    let counter = 11;
    let remainder = document.getElementById('remainder');
    let timer = window.setInterval(
        function() {
            counter--;
            remainder.textContent = counter;
        },
        1000
    );
    window.setTimeout(
        function() {
            window.clearInterval(timer);
            location.href = 'https://haru-idea.jp';
        },
        11000
    )
});