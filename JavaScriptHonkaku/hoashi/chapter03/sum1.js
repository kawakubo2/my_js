const sumup = n => {
    if (n > 0)
        return sumup(n - 1) + n;
    else
        return 0;
};

console.log(sumup(10));