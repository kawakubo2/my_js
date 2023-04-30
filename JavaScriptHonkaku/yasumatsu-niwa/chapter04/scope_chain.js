const y = 'Global';
function outerFunc() {
    const y = 'Local Outer';
    function innerFunc() {
        var z = 'Local Inner';
        {
            var z = 'Block';
        }
        console.log(z);
        console.log(y);
        // console.log(x);
    }
    innerFunc();
}
outerFunc();