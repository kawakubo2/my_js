var scope = 'Global Variable';

function getValue() {
    /*
     変数の巻き上げ(variable hoisting)
    */
    var scope;
    console.log(scope);
    scope = 'Local Variable';
    return scope;
}

console.log(getValue());
console.log(scope);