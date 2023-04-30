const a = [1, 2, 3, 4, 5];
Object.preventExtensions(a);
function double_value(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    array = [10, 20, 30];
    array.push(40, 50, 60);
    console.log(array);
}

double_value(a);
a[0] = 1000;
console.log(a);