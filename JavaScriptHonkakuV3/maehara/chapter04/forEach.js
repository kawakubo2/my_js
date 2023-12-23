const radiuses = [1, 2, 3, 4];
radiuses.forEach((r) => console.log(r ** 2 * Math.PI));

const circle_areas = radiuses
                        .filter(r => r % 2 === 0)
                        .map(r => r ** 2 * Math.PI);
console.log(circle_areas);