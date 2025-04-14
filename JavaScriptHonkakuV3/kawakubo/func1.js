function func1(x) {
  return x ** 2 + x - 2;
}

for (let i = -10000; i <= 10000; i++) {
  if (func1(i) == 0) {
    console.log(`${i}の時、0となります`);
  }
}