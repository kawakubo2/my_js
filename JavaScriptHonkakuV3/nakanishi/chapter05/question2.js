const numbers = [7, 5, 12, 3, 4, 10, 7, 8, 9, 2, 11, 6, 4, 5, 2];

const STEP = 3;
let start = 0;
let end = start + STEP;
while (end <= numbers.length) {
    console.log(numbers.slice(start, end));
    start += STEP;
    if (start >= numbers.length) break;
    end += STEP;
    if (end > numbers.length) {
        end = numbers.length;
    }
}