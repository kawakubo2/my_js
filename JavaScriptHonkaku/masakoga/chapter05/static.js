let Area = function() {}

Area.version = '1.0';

Area.getTriangle = function(base, height) {
    return base * height / 2;
};

Area.diamond = function(width, height) {
    return width * height / 2;
}

console.log('Areaのバージョン: ' + Area.version);

console.log('三角形の面積: ' + Area.getTriangle(5, 3));
console.log('菱形の面積: ' + Area.diamond(10, 2));

/*
JavsScriptはインスタンス経由での静的メソッドのアクセスを禁止している
--- 以下のコードはエラーとなる ---
let area = new Area();
console.log('三角形の面積: ' + area.getTriangle(20, 30));
*/