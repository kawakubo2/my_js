const dates = [
  '2026-09-12',
  '2026/12/25',
  '2026.07.30'
];

const re = /[\-\/\.]/;

const result = dates.map(date => date.split(re).map(e => Number(e)));
console.log(result);

result.map(e => new Date(e[0], e[1] - 1, e[2]))
      .forEach(d => console.log(d.toLocaleDateString()));