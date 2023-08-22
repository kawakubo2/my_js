const radius = [1, 2, 3, 4, 5, 6, 7, 8];

radius.forEach(function(r) {
    console.log(r ** 2 * Math.PI);
});

const totalOfCircles = radius.filter(n => n % 2 !== 0)
                            .map(r => r ** 2 * Math.PI)
                            .reduce((total, a) => total + a);
console.log(`半径が奇数の面積の合計: ${totalOfCircles}`);