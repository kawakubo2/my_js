class Area {
    static getTriangle(base, height) {
        return base * height / 2;
    }
}

console.log(Area.getTriangle(10, 2));

/*
インスタンスから静的メソッドの呼び出しは禁止
const area = new Area();
console.log(area.getTriangle());
*/