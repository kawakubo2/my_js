const x = Math.floor(Math.random() * 2);

let value;
switch(x) {
    case 0:
        value = 'x:0';
        break;
    case 1:
        value = 'x:1';
        break;
}

console.log(value);