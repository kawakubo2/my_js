var scope = 'Global Scope';

function getValue() {
    var scope;
    console.log(scope);
    scope = 'Block Scpe';
    return scope;
}

console.log(getValue());
console.log(scope);