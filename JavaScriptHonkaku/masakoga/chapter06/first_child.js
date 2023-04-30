let foods = document.getElementById('food');
let child = foods.firstElementChild;
while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}