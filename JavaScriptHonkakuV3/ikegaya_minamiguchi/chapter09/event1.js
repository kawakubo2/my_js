document.addEventListener('DOMContentLoaded', () => {
    const fruits = document.querySelectorAll('input[name="fruits"]');
    for (const fruit of fruits) {
        fruit.addEventListener('click', (e) => {
            console.log(`${e.target.nextElementSibling.textContent}${e.target.checked ? 'がチェックされた': 'のチェックが外された'}
                `)
        })
    }
});