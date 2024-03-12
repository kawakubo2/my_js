function getAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() ||
        today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()) {
        age--;
    }
    return age;
}

const birthdate = new Date(1997, 6, 4);
const age = getAge(birthdate);
console.log(`年齢: ${age}歳`);

