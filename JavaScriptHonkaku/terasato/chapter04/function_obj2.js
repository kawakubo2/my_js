let params = ['height, width', 'radius', 'upperbase, lowerbase, height'];
let formulas = ['return height * width;', 'return Math.pow(radius, 2) * Math.PI;',
    'return (upperbase + lowerbase) * height / 2;'
];
let values = [
    [10, 20],
    [5],
    [12, 8, 10]
];
for (let i = 0; i < params.length; i++) {
    const func = new Function(params[i], formulas[i]);
    console.log(func(...values[i]));
}