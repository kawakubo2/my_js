const fruits = ['banana', 'apple', 'orange', 'banana', 'grape', 'banana',
                'apple', 'pear', 'apple', 'banana', 'grape'];


function fruits_counter2(fruits) {
    const result = new Map();
    const set = new Set(fruits);
    for (const e of set) {
        result.set(e, 0);
        for (const f of fruits) {
            if (e === f) {
                result.set(e, result.get(e) + 1);
            }
        }
    }
    return result;
}

console.log(fruits_counter2(fruits));

function fruits_counter(fruits) {
    const result = new Map();
    for (const f of fruits) {
        if (!result.has(f)) {
            result.set(f, 0);
        }
        result.set(f, result.get(f) + 1);
    }
    return result;
}

console.log(fruits_counter(fruits));

function array_count(array) {
    const result = new Map();
    for (const e of array) {
        if (!result.has(e)) {
            result.set(e, 0);
        }
        result.set(e, result.get(e) + 1);
    }
    return result;
}

console.log(array_count(fruits));