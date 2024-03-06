const a1 = ["JavaScript", "CSS", "HTML"];
const a2 = ["CSS", "HTML", "JavaScript"];
const a3 = ["CSS", "SQL", "JavaScript"];

function equals_array(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    array1.sort();
    array2.sort();
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}

console.log(equals_array(a1, a2));
console.log(equals_array(a2, a3));