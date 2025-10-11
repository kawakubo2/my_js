const numbers = [5, 4, 9, 11, 7, 8, 2, 6, 1, 3];

const odd_number_squares = numbers.filter(n => n % 2 === 1)
                            .map(n => n * n);
console.log(odd_number_squares);