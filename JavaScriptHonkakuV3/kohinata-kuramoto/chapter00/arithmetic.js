function arithmetic(operator, operand1, operand2) {
  return operator(operand1, operand2);
}

const answer1 = arithmetic((x, y) => x + y, 5, 15);
console.log(answer1);

const answer2 = arithmetic((x, y) => x ** y, 2, 5);
console.log(answer2);