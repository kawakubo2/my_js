const circles = [
  {radius: 3, x: 5, y:3},
  {radius: 7, x: 5, y:-3},
  {radius: 4, x: 2, y:1},
  {radius: 5, x: -5, y:3},
  {radius: 1, x: -5, y:-3},
  {radius: 4, x: 1, y:6},
];

// 円の中心が第1象限にある円の面積の合計(小数点第1位まで)
console.log(
  circles
    .filter(c => c.x > 0 && c.y > 0)
    .map(c => c.radius ** 2 * Math.PI)
    .reduce((total, area) => total + area)
    .toFixed(1)
);

let circleAreaTotal = 0;
for (const circle of circles) {
  if (circle.x > 0 && circle.y > 0) {
    circleAreaTotal += circle.radius ** 2 * Math.PI
  }
}
console.log(circleAreaTotal.toFixed(1));