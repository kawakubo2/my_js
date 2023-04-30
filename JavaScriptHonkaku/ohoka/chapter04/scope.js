let scope = 'Global Variable';

/*
変数の巻き上げ(Variable Hoisting)
*/
function getValue() {
    var scope; // undefined
    console.log(scope);
    scope = 'Local Variable';
    return scope;
}

console.log(getValue());
console.log(scope);