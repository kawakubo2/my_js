document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#main').addEventListener('click', (e) => {
        console.log(`e.ctrlKey=${e.ctrlKey}`);
        let p = e.target.closest('[id^="chap"');
        if (p) {
            const num = Number(p.id.split('_')[1]);
            let step = e.ctrlKey ? -1 : 1;
            let next = `#chap_${Number(p.id.split('_')[1]) + step}`;
            if (document.querySelector(next)) {
                document.querySelector(next).scrollIntoView(true);
            } 
        }
    });
});