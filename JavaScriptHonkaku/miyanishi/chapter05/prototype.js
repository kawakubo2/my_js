const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

/*
 継承する場合、オブジェクトリテラル形式でメソッドを登録すると危険
*/
Member.prototype = {
    getName: function() {
        return this.lastName + ' ' + this.firstName;
    },
    toString: function() {
        return this.lastName + this.firstName;
    }
};

let mem = new Member('祥寛', '山田');
console.log(mem.getName());
console.log(mem.toString());