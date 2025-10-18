const radius = [5, 4, 3, 1, 7, 6, 2];

// Stream API
const circle_aera_total = radius
                            .filter(r => r % 2 === 0)
                            .map(r => r ** 2 * Math.PI)
                            .reduce((total, area) => total + area, 0);
console.log(`半径が偶数の円の面積の合計: ${circle_aera_total}`);