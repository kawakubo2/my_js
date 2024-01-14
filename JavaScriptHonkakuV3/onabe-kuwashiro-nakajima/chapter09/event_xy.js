document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#main');
    main.addEventListener('mousemove', (e) => {
        main.innerHTML = `
        screen: ${e.screenX} / ${e.screenY} <br />
        page:　${e.pageX} / ${e.pageY} <br />
        cleint: ${e.clientX} / ${e.clientY} <br />
        offset: ${e.offsetX} / ${e.offsetY} <br />
        `;
    })
});