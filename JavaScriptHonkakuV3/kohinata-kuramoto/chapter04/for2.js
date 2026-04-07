for (let i = 0; i <= 10; i++) {
  console.log((i / 10).toFixed(1));
}
console.log('--------');
for (let i = 0.0; i <= 1000000.0; i += 0.1) {
  if (Math.floor(i * 10) % 1000 === 0) {
    console.log(i);
  }
}