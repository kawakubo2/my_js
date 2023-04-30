class MyIterator {
    constructor(iterable) {
        this.iterable = iterable;
        this.index = 0;
    }

    hasNext() {
        if (this.index < this.iterable.length) {
            return true;
        }
        return false;
    }
    next() {
        if (this.index < this.iterable.length) {
            return this.iterable[this.index++];
        }
    }
}

class MyArray {
    constructor() {
        this.array = [];
    }
    add(val) {
        this.array.push(val);
    }
    iterator() {
        return new MyIterator(this.array)
    }
}
let ary = new MyArray();
ary.add(10);
ary.add(20);
ary.add(30);
ary.add(40);

let iter = ary.iterator();

while(iter.hasNext()) {
    console.log(iter.next());
}

let str = "abcdefghi";

for (let c of str) {
    console.log(c);
}
/* ジャグ配列 */
let array2 = [
    100,
    ['00', '01', '02', '03'],
    ['10', '11', '12', ],
    ['20', '21', '22', ['230', '231', '231'], '24'],
];

let iter3 = array2[Symbol.iterator]();

for (let n of iter3) {
    console.log(n);
}