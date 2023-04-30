let member = {
    firstName: '太郎',
    lastName: '山田',
    fullname: function() {
        return this.lastName + ' ' + this.firstName;
    }
}

for (let key in member) {
    console.log(key + ':' + member[key]);
}
