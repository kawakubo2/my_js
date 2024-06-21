const radiuses = [2, 3, 1, 5, 4, 6];

const total = radiuses
                .filter((radius) => radius % 2 === 0)
                .map((radius) => radius ** 2 * Math.PI)
                .reduce((sum, area) => sum + area);

console.log(`合計: ${total}`);