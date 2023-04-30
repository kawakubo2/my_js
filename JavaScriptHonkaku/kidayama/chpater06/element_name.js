const current = new Date();

const nam = document.getElementsByName('time');
nam[0].value = current.toLocaleTimeString();