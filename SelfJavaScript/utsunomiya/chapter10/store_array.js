let numbers = localStorage.getItem("numbers");
numbers = JSON.parse(numbers);
if (numbers === null) {
    numbers = [0, 0, 0, 0, 0, 0];
}
let rand = Math.floor(Math.random() * numbers.length);
numbers[rand]++;

console.log(numbers.toString());

const json = JSON.stringify(numbers);
localStorage.setItem("numbers", json);
