document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('#logo');
    console.log(img.getAttribute('title'));
    
    // 属性名と属性値をすべて取得する方法
    const attrs = img.attributes;
    for (const attr of attrs) {
        console.log(`${attr.name}: ${attr.value}`);
    }
})