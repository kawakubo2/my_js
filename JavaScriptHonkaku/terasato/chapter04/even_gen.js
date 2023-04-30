function* even_gen(nums) {
    for (let num of nums) {
        if (num % 2 === 0) {
            yield num;
        }
    }
}

function* circle_area(gen) {
    for (let radius of gen) {
        yield Math.pow(radius, 2) * Math.PI;
    }
}

const numbers = [8, 4, 9, 10, 12, 8, 6];

for (let area of circle_area(even_gen(numbers))) {
    console.log(area);
}

function even_array(nums) {
    let result = [];
    for (let n of nums) {
        if (n % 2 === 0) {
            result.push(n);
        }
    }
    return result;
}

function circle_array(nums) {
    let result = [];
    for (let n of nums) {
        result.push(Math.pow(n, 2) * Math.PI);
    }
    return result;
}

const circle_area_array = circle_array(even_array(numbers));
for (let area of circle_area_array) {
    console.log(area);
}