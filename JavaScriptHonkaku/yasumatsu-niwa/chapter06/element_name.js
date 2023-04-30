const current = new Date();
const name = document.getElementsByName('time');
name[0].value = current.toLocaleTimeString(); 