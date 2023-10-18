var scope = 'Global Scope';

function getValue() {
    var scope; // undefined 変数の巻き上げ(variable hoisting)
    console.log(scope);
    scope = 'Block Scope';
    return scope;
}

console.log(getValue());
console.log(scope);