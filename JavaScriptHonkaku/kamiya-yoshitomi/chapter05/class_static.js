// プロトタイプベース
const Area1 = function() {

}

Area1.getTriangle = function(base, height) {
    return base * height / 2;
};

// クラスベース
class Area2 {
    static getTriangle(base, height) {
        return base * height / 2;
    }
}

console.log(Area1.getTriangle(10, 2));
console.log(Area2.getTriangle(10, 2));