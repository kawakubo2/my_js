function getAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() ||
        today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()) {
        age--;
    }
    return age;
}

console.log(getAge(new Date(2000, 3, 3)));
console.log(getAge(new Date(2000, 3, 3)));