let integer_pattern = new RegExp("^(\\+|-)?\\d+$");

let ok_pattern = ["1", "9", "+7", "-8", "12", "38", "+81", "89284", "+28984",  "-27948091"];
let ng_pattern = ["1.2", "+2.3", "-0.3", "123a", "b31", "++1", "--2", "3+", "4-"];

console.log('OKパターン');
for(let s of ok_pattern) {
    console.log(integer_pattern.test(s));
}

console.log('NGパターン');
for(let s of ng_pattern) {
    console.log(integer_pattern.test(s));
}
