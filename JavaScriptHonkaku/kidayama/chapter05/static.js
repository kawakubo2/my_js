const Area = function() {}

Area.version = '1.0';

Area.triangle = function(width, height) {
    return width * height / 2;
}

Area.diamond = function(width, height) {
    return width * height / 2;
}

console.log('Aクラスのバージョン' + Area.version);
console.log('三角形の面積: ' + Area.triangle(5, 3));

const a = new Area();
// console.log('菱形の面積: ' + a.diamond());