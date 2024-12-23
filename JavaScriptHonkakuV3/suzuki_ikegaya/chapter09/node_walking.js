document.addEventListener('DOMContentLoaded', () => {
    let currentDiv = document.querySelector('#blog > div');
    const table = document.createElement('table');
    const dl = document.createElement('dl');
    while (currentDiv) {
        const date = currentDiv.querySelector('h4').textContent;
        const dt = document.createElement('dt');
        dt.textContent = date;
        dl.append(dt)
        let currentP = currentDiv.querySelector('p');
        while (currentP) {
            const dd = document.createElement('dd');
            dd.textContent = currentP.textContent;
            dl.append(dd);
            currentP = currentP.nextElementSibling;
        }
        currentDiv = currentDiv.nextElementSibling;
    }
    document.querySelector('#target').append(dl);
});