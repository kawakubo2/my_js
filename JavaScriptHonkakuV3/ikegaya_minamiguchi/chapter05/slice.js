const a = [
    'A', 'B', 'C', 'D', 'E', 
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
];

let pos = 0;
while (pos <= a.length) {
    const sub = a.slice(pos, pos + 5);
    console.log(sub);
    pos += 5;
}