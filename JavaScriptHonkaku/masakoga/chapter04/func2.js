/*
let numbers = [0, 8, 2, 7, 5, 1, 0, 1, 2, 4, 8, 9, 6, 7, 5, 2];

function countNumber(nums) {
    let counter = new Map();
    for (let n of nums) {
        if (counter.has(n)) {
            counter.set(n, counter.get(n) + 1);
        } else {
            counter.set(n, 1);
        }
    }
    return counter;
}

let counter = countNumber(numbers);
*/
let numbers2 = [81, 77, 57, 29, 89, 92, 58, 70, 69, 60, 55, 28, 
                38, 44, 48, 72, 90, 52, 46, 62, 68, 76, 80, 15];

function mytruncate(num, prec) {
    return Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec);
}

function countNumber2(numbers) {
    let counter = new Map();
    for (let i = 0; i <= 90; i += 10) {
        counter.set(i, 0);
    }
    for (let n of numbers) {
        let key = mytruncate(n, -1);
        counter.set(key, counter.get(key) + 1);
    }
    return counter;
}

function printHistgram(counters) {
    for (let counter of counters) {
        document.write(counter[0]);
        for (let i = 0; i < counter[1]; i++) {
            document.write('■');
        }
        document.write('<br>');
    }
}

function sortCounter(counterMap) {
    let counters = [];
    for (let [score, count] of counterMap) {
        counters.push([score, count]);
    }
    counters.sort((a, b) => a[0] - b[0]);
    return counters;
}


