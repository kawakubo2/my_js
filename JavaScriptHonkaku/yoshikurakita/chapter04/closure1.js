function func(init) {
    return function() {
        return ++init;
    }
}

let closure1 = func(1);
let closure2 = func(100);
console.log(closure1());
console.log(closure2());
console.log(closure1());
console.log(closure2());
console.log(closure1());
console.log(closure2());

let Counter = function(init) {
    this.count = init;
}
Counter.prototype.countup = function() {
    return ++this.count;
}
console.log('---< オブジェクト版 >---');
let counter1 = new Counter(1)
let counter2 = new Counter(100);

console.log(counter1.countup())
console.log(counter2.countup())
console.log(counter1.countup())
console.log(counter2.countup())
console.log(counter1.countup())
console.log(counter2.countup())

const ary1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ary2 = ary1.filter(n => n % 2 === 1);
console.log(ary2);