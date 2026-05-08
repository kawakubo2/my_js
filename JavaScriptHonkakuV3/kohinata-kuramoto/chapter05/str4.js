const data = [
  12.34, 5.789, 341.1, 781.238, 2789
];

data.forEach(n => console.log((n.toFixed(1) + '').padStart(10, '*')));

    