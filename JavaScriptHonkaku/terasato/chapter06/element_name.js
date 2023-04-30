const current = new Date();
var names = document.getElementsByName('time');
names[0].value = current.toLocaleTimeString();