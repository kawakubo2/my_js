let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

let circle_area = numbers
                    .filter(function(n) { return n > 0 && n % 2 == 0;})
                    .map(function(r) { return r ** 2 * Math.PI; });

console.log(circle_area.toString());

let circle_area_total = numbers
                            .filter(function(n) { return n > 0 && n % 2 == 0;})
                            .map(function(r) { return r ** 2 * Math.PI; })
                            .reduce(function(total , n) { return total + n});

console.log('正の偶数を半径とする円の面積の合計:' + circle_area_total);