const current = new Date();
// const time = document.getElementsByName('time');
// time[0].value = current.toLocaleTimeString();

const time = document.getElementById('time');
time.value = current.toLocaleTimeString();