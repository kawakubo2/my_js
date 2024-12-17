function myround(n, prec) {
    return Math.round(n * 10 ** prec) / 10 ** prec;
}
function myceil(n, prec) {
    return Math.ceil(n * 10 ** prec) / 10 ** prec;
}
function myfloor(n, prec) {
    return Math.floor(n * 10 ** prec) / 10 ** prec;
}