const Area = function() {}

Area.version = '1.0';

Area.triangle = function(base, height) {
    return base * height / 2;
};

Area.diamond = function(width, height) {
    return width * height / 2;
}

console.log(`Areaのバージョン: ${Area.version}`);
console.log(`三角形の面積: ` + Area.triangle(5, 3));

// const area = new Area();
// console.log(`菱形の面積: ${area.diamond()}`);