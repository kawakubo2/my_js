const getTriangle = (base, height) => {
    return base * height / 2;
};

console.log(getTriangle(5, 2));

const getCircle = radius => Math.pow(radius, 2) * Math.PI;
console.log(getCircle(5));

const hello = () => console.log('Hello, World!');
hello();

/*
 アロー関数は高階関数でよく利用される
*/