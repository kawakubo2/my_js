document.addEventListener('DOMContentLoaded', () => {
    const height = document.querySelector('#height');
    const weight = document.querySelector('#weight');
    const calcButton = document.querySelector('#calc-button');
    const result = document.querySelector('#result');

    calcButton.addEventListener('click', function() {
        const bmi = calcBmi(Number.parseFloat(height.value), Number.parseFloat(weight.value));
        result.textContent = bmi.toFixed(1);
    });

    function calcBmi(height, weight) {
        return weight / (height / 100) ** 2;
    }
});