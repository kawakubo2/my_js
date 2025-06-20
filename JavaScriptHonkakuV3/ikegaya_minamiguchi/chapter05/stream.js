const data = [1, 2, 3, 4, 5, 6];

const areaTotal = data.filter(n => n % 2 === 1)
                    .map(r => r ** 2 * Math.PI)
                    .reduce((total, area) => total + area);

console.log(areaTotal);

const oddNumbers = data.filter(n => n % 2 === 1);
console.log(oddNumbers);
const circleAreas = oddNumbers.map(r => r ** 2 * Math.PI);
console.log(circleAreas);
const totalArea = circleAreas.reduce((total, area) => total + area);
console.log(totalArea);