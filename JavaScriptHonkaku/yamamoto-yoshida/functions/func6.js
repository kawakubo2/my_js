const points = [
    [4.5, 3.7], [9.8, 7.8], [12.1, 9.0], [2.3, -5.6],
    [7.3, 2.8], [6.5, 5.5], [5.1, 4.0], [5.8, 2.9]
];

const p = [10.0, 8.1];
function distance([x1, y1], [x2, y2]) {
    // return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return Math.hypot(x2 - x1, y2 - y1);
}
function min_of_distance(points, p) {
    let min = Number.MAX_VALUE;
    let result;
    for (let i = 0; i < points.length; i++) {
        let d;
        if ((d = distance(p, points[i])) < min) {
            min = d;
            result = points[i];
        }
    }
    return result;
}

console.log(min_of_distance(points, p));