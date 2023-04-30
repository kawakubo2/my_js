const printFizzBuzz = (start, end,  fizzbuzz) => {
    fizzbuzz(start, end);
}; 

printFizzBuzz(100, 150, (low, high) => {
    for (let i = low; i <= high; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
});

const printFizzBuzz2 = (start, end, fizzbuzz) => {
    return () => fizzbuzz(start, end);
}

const fizzbuzz = printFizzBuzz2(10, 30, (low, high) => {
    for (let i = low; i <= high; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
});
console.log(typeof foobar);

fizzbuzz();