let current = new Date();
let nam = document.getElementsByName('time');
nam[0].value = current.toLocaleTimeString();
let bloodtype = document.getElementsByName('bloodtype');
let result = document.getElementById('result');
result.textContent = bloodtype[0].value;