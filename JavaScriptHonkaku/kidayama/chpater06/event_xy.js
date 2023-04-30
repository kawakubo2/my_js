document.addEventListener('DOMContentLoaded',  function() {
    const main = document.getElementById('main');
    main.addEventListener('mousemove', function(e) {
        const coords = [
            `screen: (${e.screenX}, ${e.screenY})`,
            `page: (${e.pageX}, ${e.pageY})`,
            `client: (${e.clientX}, ${e.clientY})`,
            `offset: (${e.offsetX}, ${e.offsetY})`
        ];
        main.innerHTML = coords.join('<br>');
    });
});