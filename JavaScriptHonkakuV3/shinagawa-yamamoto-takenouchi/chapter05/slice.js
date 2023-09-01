const array = ['A', 'B', 'C', 'D', 'E',
               'F', 'G', 'H', 'I', 'J',
               'K', 'L', 'M', 'N', 'O',
               'P', 'Q', 'R', 'S', 'T',
               'U', 'V', 'W', 'X', 'Y',
               'Z'
            ];

let step = 2; 
let start = 0;
let end = start + step;
let newArray = [];
for (let start = 0; end < array.length; start += step) {
    if (start + step < array.length) {
        end = start + step;
    } else {
        end = array.length;
    }
    newArray.push(array.slice(start, end));
}
console.log(newArray);