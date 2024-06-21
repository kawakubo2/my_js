const { LoadingManager } = require("three.js");

const list = [5, 25, 10];

// list.sort(function(n1, n2) {
//     return n1 - n2;
// });

list.sort((n1, n2) => n1 - n2);

console.log(list);