class Area {
    static getTriangle(base, height) {
        return base * height / 2;
    }
}

console.log(Area.getTriangle(10, 5));

/*
const area = new Area();
console.log(area.getTriangle());
*/