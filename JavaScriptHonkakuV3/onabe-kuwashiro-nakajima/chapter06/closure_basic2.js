let myClosure;

function func(init) {
    let counter = init;
    myClosure = function() {
        return ++counter;
    }
}

console.log(myClosure());
console.log(myClosure());
console.log(myClosure());