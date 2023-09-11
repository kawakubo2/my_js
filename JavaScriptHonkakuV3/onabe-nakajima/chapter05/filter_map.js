const numbers = [1, 2, 3, 4, 5, 6, 7];

const odd_number_area_list = numbers.filter(n => n % 2 !== 0)
                        .map(radius => Math.pow(radius, 2) * Math.PI);
console.log(odd_number_area_list);