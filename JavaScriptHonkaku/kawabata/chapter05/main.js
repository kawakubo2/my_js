import { Member, BusinessMember, Area as Triangle } from './lib/Util.js';
import Rectangle from './lib/Area.js';
import YourApp from './lib/MyApp.js';


let bm = new BusinessMember('太郎', '山田', '部長');
console.log(bm.work());

console.log(Triangle.getTriangle(10, 20));
console.log(new Rectangle(20, 30).getArea());

let app = new YourApp('secret string');

for (let key in app) {
    console.log(key);
}

console.log(JSON.stringify(app));
