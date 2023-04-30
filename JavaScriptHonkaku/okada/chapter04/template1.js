let age = 18;
let grade = 2;
let str = s`私は${age}歳です。大学${grade}年生です。`;
console.log(str);

function s(templates, ...values) {
    console.log(templates);
    console.log(values);
    let total = 0;
    let result = '';
    let i;
    for (i = 0, len = templates.length; i < len; i++) {
        result += templates[i];
        if (isNaN(values[i])) {
            continue;
        }
        result += values[i];
        total += parseInt(values[i]) ** 2;
        console.log(total);
    }
    return result + total;
}
