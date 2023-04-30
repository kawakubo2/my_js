function Parent() {}
function Child() {}

Parent.prototype.parentMethod = function() {
    console.log('親のメソッド');
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.childMethod = function() {
    console.log('子のメソッド');
}

const childObj = new Child();
childObj.parentMethod();
childObj.childMethod();

console.log(childObj);
console.log(childObj.__proto__);
childObj.__proto__.childMethod();
console.log(childObj.__proto__.__proto__);
childObj.__proto__.__proto__.parentMethod();

