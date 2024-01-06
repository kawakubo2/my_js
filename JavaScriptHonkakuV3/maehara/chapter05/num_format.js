const num = 1234.567;

function getLocaleString(num, locale, options) {
    let fmt = new Intl.NumberFormat(locale , {
        style: options['style'],
        currency: options['currenty'],
        currencyDisplay: options['currencyDisplay'] 
    });
    return fmt.format(num);
}

console.log(num, 'ja-JP', {style: 'currency', currency: 'JPY', currencyDisplay: 'symbol'});
console.log(num, 'en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'});
console.log(num, 'en-GB', {style: 'currency', currency: 'GBP', currencyDisplay: 'symbol'});
