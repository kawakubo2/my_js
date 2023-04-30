document.addEventListener('DOMContentLoaded', function() {
    const main = document.getElementById('main');
    const del = document.getElementById('del');

    main.addEventListener('click', function() {
        this.style.border = '3px solid red';
    });

    main.addEventListener('click', function() {
        this.style.backgroundColor = 'yellow';
    });

    const myalert = () => alert('こんにちは、イベントリスナ！');

    main.addEventListener('click', myalert);

    del.addEventListener('click', function() {
        main.removeEventListener('click', myalert);
    });
});