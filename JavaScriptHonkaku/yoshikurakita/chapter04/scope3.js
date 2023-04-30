let scope = 'Global Variable';

function getValue() {
    let scope;
    console.log(scope);
    scope = 'Local Variable';
    return scope;
}

console.log(getValue());
console.log(scope);