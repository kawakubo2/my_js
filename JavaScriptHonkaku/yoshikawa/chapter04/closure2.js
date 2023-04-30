const console_with_name = (name) => {
    return function(message) {
        console.log(`${name}: ${message}`);
    }
}

const c1 = console_with_name('山田');
const c2 = console_with_name('田中');

c1("今日は涼しいですね。");
c2("たまには、また暑くなるんでしょうね");

const calc_tax = price => tax_rate => Math.floor(price * tax_rate);

const p = 1000;
const tax = calc_tax(p);
console.log(tax(0.1));
console.log(tax(0.08));
