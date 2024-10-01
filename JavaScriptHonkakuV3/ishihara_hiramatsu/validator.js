export function isEmpty(value) {
    return  value === null || value === undefined || value === '';
}
export function isPositiveNumber(value) {
    return typeof value === 'number' && value > 0;
}
export function isArray(value) {
    return Array.isArray(value);
}