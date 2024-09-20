import getRadioValue from "./radio.js";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        console.log(getRadioValue('food'));
        console.log(getRadioValue('blood'));
    });
});
