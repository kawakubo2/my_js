let scope = 'Global Variable';

function getValue() {
    scope = 'LocalVariable';
    return scope;
}

console.log(getValue());
console.log(scope);