let vegetables = ['potato', 'pumpkin', 'cucumber'];
let other_vegetables = ['carrot', 'onion'];

vegetables.push(...other_vegetables); // spread operator(展開演算子)
console.log(vegetables);