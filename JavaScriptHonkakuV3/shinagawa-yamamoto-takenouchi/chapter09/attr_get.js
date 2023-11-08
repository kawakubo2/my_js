document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('#logo');
    console.log(img.getAttribute('title'));
    console.log(img.getAttribute('src'));
    console.log(img.getAttribute('alt'));
    const img2 = document.querySelector('#haru-idea');
    console.log(img2.getAttribute('title'));

    console.log('--- 全ての属性を取得 ---');
    const attrs = img.attributes;
    for (const attr of attrs) {
        console.log(`${attr.name}: ${attr.value}`);
    }
});