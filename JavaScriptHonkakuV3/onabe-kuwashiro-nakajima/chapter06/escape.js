console.log(`私はJavaScriptを\t勉強\nしている。`);
console.log('c:\\Program Files\\Apache Maven');
console.log(String.raw`c:\Program Files\Apache Maven`);

// const pattern = '^\\d{3}-\\d{4}$';
const pattern = String.raw`^\d{3}-\d{4}$`;
const regexp = new RegExp(pattern);
const zipcode = '123-4567';
console.log(regexp.test(zipcode));