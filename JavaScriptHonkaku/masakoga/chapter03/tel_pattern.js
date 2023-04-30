/*
 固定・スマホの電話番号の正規表現 
*/

let tel_pattern = new RegExp('^[0-9]{2,5}-[0-9]{2,5}-[0-9]{4}$');

let tel1 = '092-292-9999';
let tel2 = '080-8888-8888';
let tel3 = '03-999999-9999';

if (tel_pattern.test(tel1)) {
    console.log('○');
} else {
    console.log('×');
}

if (tel_pattern.test(tel2)) {
    console.log('○');
} else {
    console.log('×');
}

if (tel_pattern.test(tel3)) {
    console.log('○');
} else {
    console.log('×');
}