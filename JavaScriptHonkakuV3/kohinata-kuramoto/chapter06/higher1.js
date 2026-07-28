function factorail2(n) {
  let total = 1;
  for (let i = n; i >= 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorail2(5));