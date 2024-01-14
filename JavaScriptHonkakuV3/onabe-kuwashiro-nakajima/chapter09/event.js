document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', (e) => {
        const target = e.target;
        console.log(`発生元: ${target.nodeName} / ${target.id}`);
        console.log(`種類　: ${e.type}`);
    });
});