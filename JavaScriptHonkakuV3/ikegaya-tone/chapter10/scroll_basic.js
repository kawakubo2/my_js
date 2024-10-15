document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#main');

    main.addEventListener('click', (e) => {
        const p = e.target.closest('[id^="chap"]');
        if (p) {
            const next = `#chap_${Number(e.target.id.split('_')[1]) + 1}`;
            document.querySelector(next)?.scrollIntoView(true);
        }
    });
});