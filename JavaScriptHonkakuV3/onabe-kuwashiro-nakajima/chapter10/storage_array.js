const storage = localStorage;
const fruits = ["バナナ", "リンゴ", "ブドウ", "スイカ"];
storage.setItem("fruits", JSON.stringify(fruits));
const data = JSON.parse(storage.getItem("fruits"));

data.push("イチゴ");
console.log(data);