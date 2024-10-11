document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector('#event-driven');
    const name = document.querySelector('#name');
    const name_result = document.querySelector('#name-result');
    const bloodtype = document.querySelector('#bloodtype');
    const bloodtype_result = document.querySelector('#bloodtype-result');
    p.addEventListener('mouseenter', () => {
        p.style.backgroundColor = 'royalblue';
    });
    p.addEventListener('mouseleave', () => {
        p.style.backgroundColor = '';
    });
    name.addEventListener('input', () => {
        length = name?.value?.replaceAll(' ', '').replaceAll('　', '')?.length;
        
        name_result.textContent = `${length}文字`;
    });
    bloodtype.addEventListener('change', (e) => {
        const type = e.target.value;
        bloodtype_result.textContent = `${type}型`;
    });
});