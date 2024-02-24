let name = "星山裕子"; // string型  
name = 123; // number型
name = [1, 2, 3, 4, 5]; // object型
name = function (x, y) { return x + y; } // function型
console.log(name(100, 200));
name = 100;
console.log(name(100, 200));

