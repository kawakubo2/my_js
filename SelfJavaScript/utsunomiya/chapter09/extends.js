function Parent() {}
function Child() {}
const parent = new Parent();
Parent.prototype.parentMethod = function() {
    console.log('親のメソッド');
};
Child.prototype = parent; // Child.prototype = Object.create(Parent.prototype);
Child.prototype.childMethod = function() {
    console.log('子のメソッド');
}

const child = new Child();
child.childMethod();
child.parentMethod();

