let scope = 'Glocal Scope';

function getValue() {
    console.log(scope);
    let scope = 'Block Scope';
    return scope;
}

console.log(getValue());