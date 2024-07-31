class MyArray {
    constructor(array) {
        this.array = array;
    }
    filter(callback) {
        const result = [];
        for (const n of this.array) {
            if (callback(n)) {
                result.push(n);
            }
        }
        this.array = result;
        return this;
    }
    map(callback) {
        const result = [];
        for (const n of this.array) {
            result.push(callback(n));    
        }
        this.array = result;
        return this;
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = new MyArray(numbers).filter(n => n % 2 === 1).map(n => n * n);
console.log(answer.array);

const fruits = ['banana', 'apple', 'orange', 'watermelon'];
const answer2 = new MyArray(fruits).filter((f) => f.startsWith("a") || f.startsWith("b"))
                                   .map(f => f.length);

console.log(answer2.array);