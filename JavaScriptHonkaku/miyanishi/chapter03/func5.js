let scope = 'Global Variable';

function getValue() {
    scope = 'Local Varibale';
    return scope;
}

console.log(getValue());
console.log(scope);
