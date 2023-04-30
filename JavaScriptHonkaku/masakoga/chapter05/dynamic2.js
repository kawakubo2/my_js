let Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let mem = new Member('祥寛', '山田');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName())

let mem2 = new Member('奈美', '掛谷');
// console.log(mem2.getName());

function myformat() {
    return this.getFullYear() + '年' + (this.getMonth() + 1) + '月' + this.getDate() + '日';
}

console.log(myformat.call(new Date()));
