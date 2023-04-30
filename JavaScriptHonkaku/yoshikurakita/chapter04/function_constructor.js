var scope = 'Global Varibale';

function func1() {
    var scope = 'Local Variable';

    var func2 = function() {
        return scope;
    }
    var func3 = new Function('return scope');

    console.log(func2());
    console.log(func3());
}

func1();