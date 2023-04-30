function* getUpper(str) {
    for (let i = 0; i < str.length; i++) {
        yield str.charAt(i).toUpperCase();
    }
}

for (let c of getUpper('HelLo')) {
    console.log(c);
}