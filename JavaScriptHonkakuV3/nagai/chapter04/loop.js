let i = 10;
let timer = setInterval(() => {
  console.log(i);
  i--;
},
1000);

setTimeout(() => {
  clearInterval(timer);
}, 11000);