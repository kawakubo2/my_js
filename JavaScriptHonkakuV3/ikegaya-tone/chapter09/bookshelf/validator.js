function isEmpty(value) {
    return value === null || value === undefined || value === '';
};
function isPositiveNumber(value) {
    return /^\d+$/.test(value);
};